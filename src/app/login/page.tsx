import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { login, signup } from './actions';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">로그인</h1>
            <p className="text-muted-foreground">
              K-Nomad Cities에 오신 것을 환영합니다
            </p>
          </div>

          <Card className="p-6">
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  이메일
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="이메일을 입력하세요"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                  비밀번호
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  required
                />
              </div>

              <div className="space-y-2">
                <Button type="submit" formAction={login} className="w-full">
                  로그인
                </Button>
                
                <Button type="submit" formAction={signup} variant="outline" className="w-full">
                  회원가입
                </Button>
              </div>
            </form>

          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}