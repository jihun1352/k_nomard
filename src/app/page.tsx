import { createClient } from '@/utils/supabase/server'
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import QuickFilterSystem from '@/components/sections/QuickFilterSystem';
import RealtimeDashboard from '@/components/sections/RealtimeDashboard';
import PopularCitiesRanking from '@/components/sections/PopularCitiesRanking';
import KoreaNomadHeatmap from '@/components/sections/KoreaNomadHeatmap';
import AIRecommendationSystem from '@/components/sections/AIRecommendationSystem';
import CommunityFeed from '@/components/sections/CommunityFeed';

interface HomeProps {
  searchParams: {
    message?: string
  }
}

export default async function Home({ searchParams }: HomeProps) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  const showSuccessMessage = searchParams.message === 'signup_success'
  
  return (
    <div className="min-h-screen bg-background">
      <Header user={user} />
      
      {showSuccessMessage && (
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="text-green-400 text-xl">✅</div>
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-700">
                회원가입이 성공적으로 완료되었습니다! 이제 로그인할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      )}
      
      <main>
        <HeroSection />
        <QuickFilterSystem />
        <RealtimeDashboard />
        <PopularCitiesRanking />
        <KoreaNomadHeatmap />
        <AIRecommendationSystem />
        <CommunityFeed />
      </main>
      
      <Footer />
    </div>
  );
}
