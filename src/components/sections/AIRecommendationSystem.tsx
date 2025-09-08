import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, ArrowRight, Clock, Target } from 'lucide-react';

const AIRecommendationSystem = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-purple-950/20 dark:via-indigo-950/20 dark:to-blue-950/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white mb-4">
              <Bot className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">🤖 당신에게 딱 맞는 도시를 찾아드려요!</h2>
            <p className="text-lg text-muted-foreground mb-6">
              AI가 분석한 개인 맞춤 추천으로 완벽한 노마드 도시를 발견하세요
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30">
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-purple-600" />
                <span>📝 간단한 설문조사 (2분)</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl mb-2">💰</div>
                  <h3 className="font-semibold text-sm mb-1">예산 범위</h3>
                  <p className="text-xs text-muted-foreground">월 생활비 설정</p>
                </div>
                
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl mb-2">💻</div>
                  <h3 className="font-semibold text-sm mb-1">업무 환경</h3>
                  <p className="text-xs text-muted-foreground">선호하는 작업 공간</p>
                </div>
                
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="font-semibold text-sm mb-1">라이프스타일</h3>
                  <p className="text-xs text-muted-foreground">생활 패턴 선택</p>
                </div>
                
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl mb-2">⭐</div>
                  <h3 className="font-semibold text-sm mb-1">중요 요소</h3>
                  <p className="text-xs text-muted-foreground">우선순위 설정</p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-4">
                  <Clock className="h-4 w-4" />
                  <span>평균 소요시간: 2분</span>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3"
                >
                  🎯 맞춤 추천 받기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border border-green-200/50 dark:border-green-800/30">
                  <div className="flex items-center justify-center space-x-2 text-sm text-green-700 dark:text-green-400">
                    <span>✨</span>
                    <span>지금까지 <strong>1,247명</strong>이 AI 추천을 통해 완벽한 도시를 찾았어요!</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIRecommendationSystem;