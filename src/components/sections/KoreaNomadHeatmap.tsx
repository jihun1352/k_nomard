import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MOCK_CITIES } from '@/constants/mockData';

const KoreaNomadHeatmap = () => {
  // 지역별 노마드 수 계산 (간단한 버전)
  const regionData = [
    { name: '서울(수도권)', nomads: 1847, x: 150, y: 100, emoji: '🏙️' },
    { name: '부산', nomads: 127, x: 300, y: 280, emoji: '🌊' },
    { name: '대전', nomads: 234, x: 150, y: 160, emoji: '🏛️' },
    { name: '전주', nomads: 145, x: 120, y: 200, emoji: '🍯' },
    { name: '강릉', nomads: 156, x: 200, y: 80, emoji: '🌊' },
    { name: '제주', nomads: 89, x: 130, y: 350, emoji: '🌴' },
  ];

  const getColorByNomads = (nomads: number) => {
    if (nomads >= 200) return 'text-red-500 bg-red-100 dark:bg-red-900/30';
    if (nomads >= 100) return 'text-orange-500 bg-orange-100 dark:bg-orange-900/30';
    if (nomads >= 50) return 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30';
    return 'text-green-500 bg-green-100 dark:bg-green-900/30';
  };

  const getLegendColor = (range: string) => {
    switch (range) {
      case '200+': return 'bg-red-500';
      case '100-199': return 'bg-orange-500';
      case '50-99': return 'bg-yellow-500';
      case '10-49': return 'bg-green-500';
      default: return 'bg-gray-400';
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-2xl">
              <span>🗺️</span>
              <span>전국 노마드 히트맵</span>
            </CardTitle>
            <p className="text-muted-foreground">
              전국 각 지역의 디지털 노마드 분포를 확인해보세요
            </p>
          </CardHeader>
          
          <CardContent>
            {/* 간단한 지도 표현 */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 rounded-xl p-8 mb-6">
              <div className="relative w-full h-96 mx-auto max-w-md">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full"
                  style={{ maxWidth: '400px', maxHeight: '400px' }}
                >
                  {/* 간단한 한국 지도 윤곽 */}
                  <path
                    d="M50 100 Q100 50 200 80 Q300 70 350 120 Q360 200 340 280 Q300 350 200 380 Q100 360 80 300 Q40 200 50 100 Z"
                    fill="currentColor"
                    className="text-muted/20"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  
                  {/* 제주도 */}
                  <circle
                    cx="130"
                    cy="350"
                    r="15"
                    fill="currentColor"
                    className="text-muted/20"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  
                  {/* 지역별 노마드 포인트 */}
                  {regionData.map((region, index) => (
                    <g key={index}>
                      <circle
                        cx={region.x}
                        cy={region.y}
                        r={Math.min(region.nomads / 30 + 8, 25)}
                        className={`${getColorByNomads(region.nomads)} cursor-pointer hover:opacity-80 transition-opacity`}
                        fill="currentColor"
                        opacity="0.7"
                      />
                      <text
                        x={region.x}
                        y={region.y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-xs font-semibold fill-current"
                        style={{ fontSize: '12px' }}
                      >
                        {region.emoji}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>

            {/* 지역 정보 리스트 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {regionData.map((region, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-background border border-border hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{region.emoji}</span>
                    <div>
                      <h3 className="font-semibold text-sm">{region.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {region.nomads}명 활동중
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={`${getColorByNomads(region.nomads)} text-xs`}
                  >
                    {region.nomads}
                  </Badge>
                </div>
              ))}
            </div>

            {/* 범례 */}
            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="text-sm font-semibold mb-3">범례</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  { label: '200명+', range: '200+', count: '1개 지역' },
                  { label: '100-199명', range: '100-199', count: '3개 지역' },
                  { label: '50-99명', range: '50-99', count: '1개 지역' },
                  { label: '10-49명', range: '10-49', count: '1개 지역' },
                ].map((item) => (
                  <div key={item.range} className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${getLegendColor(item.range)}`} />
                    <span className="text-xs text-muted-foreground">{item.label}</span>
                    <span className="text-xs text-muted-foreground">({item.count})</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default KoreaNomadHeatmap;