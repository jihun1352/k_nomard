'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { FILTER_OPTIONS } from '@/constants/filters';
import { X, Filter } from 'lucide-react';

const QuickFilterSystem = () => {
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string[];
  }>({
    budget: [],
    housingType: [],
    region: [],
    purpose: [],
    features: [],
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const handleFilterToggle = (category: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  const handleClearFilters = () => {
    setSelectedFilters({
      budget: [],
      housingType: [],
      region: [],
      purpose: [],
      features: [],
    });
  };

  const getTotalSelectedCount = () => {
    return Object.values(selectedFilters).reduce((total, filters) => total + filters.length, 0);
  };

  const FilterSection = ({ 
    title, 
    emoji, 
    category, 
    options 
  }: { 
    title: string; 
    emoji: string; 
    category: string; 
    options: { label: string; value: string }[] 
  }) => (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-muted-foreground flex items-center space-x-1">
        <span>{emoji}</span>
        <span>{title}</span>
      </h3>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selectedFilters[category].includes(option.value);
          return (
            <Button
              key={option.value}
              variant={isSelected ? "default" : "outline"}
              size="sm"
              onClick={() => handleFilterToggle(category, option.value)}
              className={`transition-all ${
                isSelected 
                  ? 'shadow-sm' 
                  : 'hover:border-primary/50'
              }`}
            >
              {option.label}
            </Button>
          );
        })}
      </div>
    </div>
  );

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            {/* 헤더 */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div className="flex items-center space-x-2 mb-4 sm:mb-0">
                <Filter className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">빠른 필터</h2>
                {getTotalSelectedCount() > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {getTotalSelectedCount()}개 선택됨
                  </Badge>
                )}
              </div>
              <div className="flex items-center space-x-2">
                {getTotalSelectedCount() > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClearFilters}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4 mr-1" />
                    모두 지우기
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="sm:hidden"
                >
                  {isExpanded ? '접기' : '더보기'}
                </Button>
              </div>
            </div>

            {/* 선택된 필터 표시 */}
            {getTotalSelectedCount() > 0 && (
              <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                <div className="text-sm text-muted-foreground mb-2">선택된 필터:</div>
                <div className="flex flex-wrap gap-1">
                  {Object.entries(selectedFilters).map(([category, values]) =>
                    values.map(value => {
                      const categoryOptions = FILTER_OPTIONS[category as keyof typeof FILTER_OPTIONS];
                      const option = categoryOptions.find(opt => opt.value === value);
                      return (
                        <Badge
                          key={`${category}-${value}`}
                          variant="secondary"
                          className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-colors"
                          onClick={() => handleFilterToggle(category, value)}
                        >
                          {option?.label}
                          <X className="h-3 w-3 ml-1" />
                        </Badge>
                      );
                    })
                  )}
                </div>
              </div>
            )}

            {/* 필터 옵션들 */}
            <div className={`space-y-6 ${!isExpanded && 'hidden sm:block'}`}>
              <FilterSection 
                title="예산별" 
                emoji="💰" 
                category="budget" 
                options={FILTER_OPTIONS.budget} 
              />
              <FilterSection 
                title="주거타입" 
                emoji="🏠" 
                category="housingType" 
                options={FILTER_OPTIONS.housingType} 
              />
              <FilterSection 
                title="지역별" 
                emoji="🌍" 
                category="region" 
                options={FILTER_OPTIONS.region} 
              />
              <FilterSection 
                title="목적별" 
                emoji="🎯" 
                category="purpose" 
                options={FILTER_OPTIONS.purpose} 
              />
              <FilterSection 
                title="특성별" 
                emoji="⭐" 
                category="features" 
                options={FILTER_OPTIONS.features} 
              />
            </div>

            {/* 적용 버튼 */}
            {getTotalSelectedCount() > 0 && (
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                  <p className="text-sm text-muted-foreground">
                    선택한 조건에 맞는 도시를 찾아보세요
                  </p>
                  <Button className="shadow-sm">
                    🔍 {getTotalSelectedCount()}개 필터로 검색
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuickFilterSystem;