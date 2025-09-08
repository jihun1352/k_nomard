export const FILTER_OPTIONS = {
  budget: [
    { label: '~80만원', value: '0-800000' },
    { label: '80-120만원', value: '800000-1200000' },
    { label: '120-180만원', value: '1200000-1800000' },
    { label: '180만원+', value: '1800000+' },
  ],
  housingType: [
    { label: '원룸', value: 'studio' },
    { label: '오피스텔', value: 'officetel' },
    { label: '쉐어하우스', value: 'sharehouse' },
    { label: '게스트하우스', value: 'guesthouse' },
  ],
  region: [
    { label: '수도권', value: 'capital' },
    { label: '충청권', value: 'chungcheong' },
    { label: '영남권', value: 'yeongnam' },
    { label: '호남권', value: 'honam' },
    { label: '강원권', value: 'gangwon' },
    { label: '제주권', value: 'jeju' },
  ],
  purpose: [
    { label: '장기정착', value: 'longterm' },
    { label: '단기체험', value: 'shortterm' },
    { label: '휴양형', value: 'vacation' },
    { label: '네트워킹', value: 'networking' },
  ],
  features: [
    { label: '#카페천국', value: 'cafe_heaven' },
    { label: '#자연친화', value: 'nature_friendly' },
    { label: '#교통편리', value: 'transport_convenient' },
    { label: '#비용절약', value: 'budget_friendly' },
    { label: '#해변근처', value: 'beachside' },
    { label: '#문화생활', value: 'cultural' },
  ],
};

export const SORT_OPTIONS = [
  { label: '인기도순', value: 'popularity' },
  { label: '평점순', value: 'rating' },
  { label: '생활비순', value: 'cost' },
  { label: '노마드수순', value: 'nomads' },
  { label: '최신순', value: 'latest' },
];

export const KOREAN_REGIONS = {
  capital: '수도권',
  chungcheong: '충청권',
  yeongnam: '영남권',
  honam: '호남권',
  gangwon: '강원권',
  jeju: '제주권',
};