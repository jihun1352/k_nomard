import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import QuickFilterSystem from '@/components/sections/QuickFilterSystem';
import RealtimeDashboard from '@/components/sections/RealtimeDashboard';
import PopularCitiesRanking from '@/components/sections/PopularCitiesRanking';
import KoreaNomadHeatmap from '@/components/sections/KoreaNomadHeatmap';
import AIRecommendationSystem from '@/components/sections/AIRecommendationSystem';
import CommunityFeed from '@/components/sections/CommunityFeed';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
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
