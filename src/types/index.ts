export interface City {
  id: string;
  name: string;
  region: string;
  rating: number;
  monthlyCost: number;
  internetSpeed: number;
  currentNomads: number;
  image: string;
  tags: string[];
  description: string;
  popularityTrend: number; // percentage change
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  cityId: string;
  cityName: string;
  content: string;
  rating: number;
  likes: number;
  dislikes: number;
  comments: number;
  createdAt: string;
}

export interface DashboardStats {
  totalNomads: number;
  activeCities: number;
  monthlyReviews: number;
  trendingCity: {
    name: string;
    trend: number;
  };
}

export interface FilterOptions {
  budget: string[];
  housingType: string[];
  region: string[];
  purpose: string[];
  features: string[];
}

export interface User {
  id: string;
  name: string;
  avatar?: string;
}

export type SortOption = 'popularity' | 'rating' | 'cost' | 'nomads' | 'latest';

export interface RecommendationQuiz {
  budget: string;
  workEnvironment: string;
  lifestyle: string;
  priorities: string[];
}