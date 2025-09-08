import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Users, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 메인 타이틀 */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center space-x-2 mb-4">
              <span className="text-4xl">🇰🇷</span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                대한민국 노마드 도시 찾기
              </h1>
              <span className="text-4xl">🇰🇷</span>
            </div>
          </div>

          {/* 서브타이틀 */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
            한국에서 디지털 노마드로 살기 좋은 도시를<br className="hidden sm:block" />
            <span className="font-semibold text-foreground">찾고, 평가하고, 연결하세요</span>
          </p>

          {/* 주요 통계 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/50 shadow-sm">
              <div className="flex items-center justify-center space-x-2 text-blue-600 mb-2">
                <MapPin className="h-5 w-5" />
                <span className="text-2xl font-bold">42</span>
              </div>
              <p className="text-sm text-muted-foreground">개 도시</p>
            </div>
            <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/50 shadow-sm">
              <div className="flex items-center justify-center space-x-2 text-indigo-600 mb-2">
                <Users className="h-5 w-5" />
                <span className="text-2xl font-bold">2,847</span>
              </div>
              <p className="text-sm text-muted-foreground">명 노마드</p>
            </div>
            <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/50 shadow-sm">
              <div className="flex items-center justify-center space-x-2 text-purple-600 mb-2">
                <Star className="h-5 w-5" />
                <span className="text-2xl font-bold">1,234</span>
              </div>
              <p className="text-sm text-muted-foreground">개 리뷰</p>
            </div>
          </div>

          {/* CTA 버튼 */}
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              🎯 도시 찾기 시작하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-3 border-2 hover:bg-background/80 transition-all duration-300"
            >
              🤖 AI 추천 받기
            </Button>
          </div>

          {/* 추가 안내 */}
          <div className="mt-12 p-6 bg-background/40 backdrop-blur-sm rounded-xl border border-border/50">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <span className="text-green-500">✓</span>
                <span>실시간 생활비 비교</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-green-500">✓</span>
                <span>실제 노마드 후기</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-green-500">✓</span>
                <span>커뮤니티 네트워킹</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;