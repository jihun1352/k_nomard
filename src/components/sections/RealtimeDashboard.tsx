import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MOCK_DASHBOARD_STATS } from '@/constants/mockData';
import { Users, MapPin, MessageSquare, TrendingUp, Activity } from 'lucide-react';

const RealtimeDashboard = () => {
  const stats = MOCK_DASHBOARD_STATS;

  const StatCard = ({ 
    icon: Icon, 
    label, 
    value, 
    emoji, 
    trend 
  }: { 
    icon: any; 
    label: string; 
    value: string | number; 
    emoji: string; 
    trend?: { value: number; label: string } 
  }) => (
    <div className="flex items-center space-x-3 p-4 rounded-lg bg-gradient-to-br from-background/50 to-muted/30 border border-border/50 hover:border-border transition-colors">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
        <span className="text-lg">{emoji}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-foreground">
            {typeof value === 'number' ? value.toLocaleString() : value}
          </span>
          {trend && (
            <Badge variant="secondary" className="text-xs">
              +{trend.value}%
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground truncate">{label}</p>
      </div>
    </div>
  );

  return (
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            {/* 헤더 */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30">
                <Activity className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-xl font-bold">실시간 현황</h2>
              <Badge variant="outline" className="text-xs">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse" />
                LIVE
              </Badge>
            </div>

            {/* 통계 카드들 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                icon={Users}
                emoji="📈"
                label="전국 노마드"
                value={`${stats.totalNomads}명`}
              />
              
              <StatCard
                icon={MapPin}
                emoji="📍"
                label="활성 도시"
                value={`${stats.activeCities}개`}
              />
              
              <StatCard
                icon={MessageSquare}
                emoji="💬"
                label="이번달 리뷰"
                value={`${stats.monthlyReviews}개`}
              />
              
              <StatCard
                icon={TrendingUp}
                emoji="🔥"
                label={`인기급상승: ${stats.trendingCity.name}`}
                value={`+${stats.trendingCity.trend}%`}
                trend={{ value: stats.trendingCity.trend, label: '상승' }}
              />
            </div>

            {/* 추가 인사이트 */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg border border-blue-200/30 dark:border-blue-800/30">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">💡</span>
                  <span className="text-sm font-medium">오늘의 인사이트</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  🌊 해안 도시 관심도가 전주 대비 23% 증가했어요!
                </div>
              </div>
            </div>

            {/* 마지막 업데이트 정보 */}
            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground">
                마지막 업데이트: {new Date().toLocaleTimeString('ko-KR')} • 1분마다 자동 갱신
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RealtimeDashboard;