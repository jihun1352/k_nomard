'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MOCK_CITIES } from '@/constants/mockData';
import { SORT_OPTIONS } from '@/constants/filters';
import { Trophy, Star, DollarSign, Wifi, Users, ChevronDown, ExternalLink, TrendingUp } from 'lucide-react';
import type { SortOption } from '@/types';

const PopularCitiesRanking = () => {
  const [sortBy, setSortBy] = useState<SortOption>('popularity');
  const [showAll, setShowAll] = useState(false);

  const sortedCities = [...MOCK_CITIES].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'cost':
        return a.monthlyCost - b.monthlyCost;
      case 'nomads':
        return b.currentNomads - a.currentNomads;
      case 'latest':
        return a.name.localeCompare(b.name); // 임시로 이름순
      case 'popularity':
      default:
        return b.popularityTrend - a.popularityTrend;
    }
  });

  const displayedCities = showAll ? sortedCities : sortedCities.slice(0, 5);

  const getRankEmoji = (index: number) => {
    switch (index) {
      case 0: return '🥇';
      case 1: return '🥈';
      case 2: return '🥉';
      default: return '🏅';
    }
  };

  const getCityEmoji = (cityName: string) => {
    const emojiMap: { [key: string]: string } = {
      '부산': '🌊',
      '대전': '🏛️',
      '제주': '🌴',
      '전주': '🍯',
      '강릉': '🏔️',
    };
    return emojiMap[cityName] || '🏙️';
  };

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `₩${(amount / 1000000).toFixed(1)}M`;
    }
    return `₩${(amount / 1000).toFixed(0)}K`;
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <CardTitle className="flex items-center space-x-2 text-2xl">
                <Trophy className="h-6 w-6 text-yellow-600" />
                <span>🏆 이번 주 인기 도시 TOP 10</span>
              </CardTitle>
              
              {/* 정렬 옵션 */}
              <div className="flex flex-wrap gap-2">
                {SORT_OPTIONS.map((option) => (
                  <Button
                    key={option.value}
                    variant={sortBy === option.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSortBy(option.value as SortOption)}
                    className="text-xs"
                  >
                    {option.label}
                    {sortBy === option.value && <ChevronDown className="ml-1 h-3 w-3" />}
                  </Button>
                ))}
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-0">
            <div className="space-y-0">
              {displayedCities.map((city, index) => (
                <div
                  key={city.id}
                  className={`p-6 border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors ${
                    index === 0 ? 'bg-gradient-to-r from-yellow-50/50 to-transparent dark:from-yellow-950/10' : ''
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    {/* 순위와 도시 정보 */}
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted/50">
                        <span className="text-xl">{getRankEmoji(index)}</span>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-2xl">{getCityEmoji(city.name)}</span>
                          <h3 className="text-lg font-bold">{city.name}</h3>
                          <Badge variant="outline" className="text-xs">
                            #{index + 1}
                          </Badge>
                          {city.popularityTrend > 20 && (
                            <Badge variant="secondary" className="text-xs">
                              <TrendingUp className="w-3 h-3 mr-1" />
                              HOT
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {city.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">{city.description}</p>
                      </div>
                    </div>

                    {/* 통계 정보 */}
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="flex flex-col items-center">
                        <div className="flex items-center space-x-1 text-yellow-600">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="text-sm font-semibold">{city.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">평점</span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="flex items-center space-x-1 text-green-600">
                          <DollarSign className="h-4 w-4" />
                          <span className="text-sm font-semibold">{formatCurrency(city.monthlyCost)}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">월 생활비</span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="flex items-center space-x-1 text-blue-600">
                          <Wifi className="h-4 w-4" />
                          <span className="text-sm font-semibold">{city.internetSpeed}Mbps</span>
                        </div>
                        <span className="text-xs text-muted-foreground">인터넷</span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="flex items-center space-x-1 text-purple-600">
                          <Users className="h-4 w-4" />
                          <span className="text-sm font-semibold">{city.currentNomads}명</span>
                        </div>
                        <span className="text-xs text-muted-foreground">노마드</span>
                      </div>

                      <Button size="sm" variant="outline" className="flex items-center space-x-1">
                        <span>📊</span>
                        <span className="hidden sm:inline">상세보기</span>
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 더보기 버튼 */}
            {!showAll && sortedCities.length > 5 && (
              <div className="p-6 bg-muted/20 text-center border-t border-border">
                <Button
                  variant="outline"
                  onClick={() => setShowAll(true)}
                  className="mx-auto"
                >
                  더 많은 도시 보기 ({sortedCities.length - 5}개 더)
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}

            {showAll && (
              <div className="p-6 bg-muted/20 text-center border-t border-border">
                <Button
                  variant="outline"
                  onClick={() => setShowAll(false)}
                  className="mx-auto"
                >
                  접기
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PopularCitiesRanking;