import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MOCK_REVIEWS } from '@/constants/mockData';
import { MessageSquare, ThumbsUp, ThumbsDown, User, MapPin, ExternalLink } from 'lucide-react';

const CommunityFeed = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">💬 최신 후기 & 리뷰</h2>
            <p className="text-lg text-muted-foreground">
              실제 노마드들의 생생한 경험담과 솜솔한 후기를 확인하세요
            </p>
          </div>

          <div className="space-y-6">
            {MOCK_REVIEWS.map((review) => (
              <Card key={review.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* 사용자 아바타 */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                        <User className="h-6 w-6" />
                      </div>
                    </div>

                    {/* 리뷰 내용 */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-sm">👤 {review.userName}</h3>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>@{review.cityName}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">·</span>
                        <span className="text-xs text-muted-foreground">{review.createdAt}</span>
                      </div>

                      <p className="text-gray-900 dark:text-gray-100 mb-4 leading-relaxed">
                        “{review.content}”
                      </p>

                      {/* 인터렉션 버튼들 */}
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-green-600 transition-colors">
                          <ThumbsUp className="h-4 w-4" />
                          <span>⬆️{review.likes}</span>
                        </button>
                        
                        <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-red-600 transition-colors">
                          <ThumbsDown className="h-4 w-4" />
                          <span>⬇️{review.dislikes}</span>
                        </button>
                        
                        <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                          <MessageSquare className="h-4 w-4" />
                          <span>💬{review.comments}</span>
                        </button>
                      </div>
                    </div>

                    {/* 평점 배지 */}
                    <div className="flex-shrink-0">
                      <Badge variant="outline" className="text-xs">
                        ⭐ {review.rating}.0
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 더보기 버튼 */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8">
              🔍 더 많은 후기 보기
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityFeed;