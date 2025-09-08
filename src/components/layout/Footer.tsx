import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Github, Twitter, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: '서비스',
      links: [
        { label: '도시 검색', href: '/cities' },
        { label: 'AI 추천', href: '/recommend' },
        { label: '커뮤니티', href: '/community' },
        { label: '통계', href: '/stats' },
      ]
    },
    {
      title: '도구',
      links: [
        { label: 'FIRE 계산기', href: '/tools/fire' },
        { label: '생활비 계산기', href: '/tools/cost' },
        { label: '비자 안내', href: '/tools/visa' },
        { label: '체크리스트', href: '/tools/checklist' },
      ]
    },
    {
      title: '회사 정보',
      links: [
        { label: '회사 소개', href: '/about' },
        { label: '이용약관', href: '/terms' },
        { label: '개인정보처리방침', href: '/privacy' },
        { label: '문의하기', href: '/contact' },
      ]
    }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4">
        {/* 뉴스레터 섹션 */}
        <div className="py-12 border-b border-border">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">📧 뉴스레터 구독</h3>
            <p className="text-muted-foreground mb-6">
              매주 새로운 노마드 도시 소식과 특별한 할인 혜택을 받아보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="이메일 주소를 입력하세요..." 
                className="flex-1"
              />
              <Button>
                <Mail className="h-4 w-4 mr-2" />
                구독하기
              </Button>
            </div>
          </div>
        </div>

        {/* 링크 섹션 */}
        <div className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* 로고 섹션 */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🏠</span>
                <span className="text-lg font-bold">K-Nomad Cities</span>
              </Link>
              <p className="text-sm text-muted-foreground mb-4">
                한국에서 디지털 노마드로 살기 좋은 도시를 찾고, 평가하고, 연결하는 플랫폼
              </p>
              
              {/* 소셜 미디어 링크 */}
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* 링크 섹션들 */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 하단 저작권 */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} K-Nomad Cities. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>in Korea</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;