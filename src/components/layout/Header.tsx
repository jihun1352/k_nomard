'use client';

import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: '🔍 검색', href: '/search' },
    { label: '💬 커뮤니티', href: '/community' },
    { label: '📊 통계', href: '/stats' },
    { label: '🛠 도구', href: '/tools' },
    { label: '💎 프리미엄', href: '/premium' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* 브랜드 로고 */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            <span className="text-2xl">🏠</span>
            <span>K-Nomad Cities</span>
          </Link>

          {/* 데스크톱 검색바 */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="도시명, 태그, 키워드 검색..."
                className="pl-9 pr-4"
              />
            </div>
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="default" size="sm">
              👤 로그인
            </Button>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            {/* 모바일 검색바 */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="도시명, 태그, 키워드 검색..."
                  className="pl-9 pr-4"
                />
              </div>
            </div>

            {/* 모바일 네비게이션 */}
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button variant="default" size="sm" className="w-full">
                  👤 로그인
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;