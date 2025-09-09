import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ErrorPageProps {
  searchParams: {
    message?: string
  }
}

export default function ErrorPage({ searchParams }: ErrorPageProps) {
  const getErrorMessage = (message?: string) => {
    switch (message) {
      case 'email_not_confirmed':
        return {
          title: '이메일 확인 필요',
          description: '회원가입 후 이메일을 확인해주세요. 이메일함을 확인하고 인증 링크를 클릭해주세요.',
          emoji: '📧'
        }
      case 'invalid_credentials':
        return {
          title: '로그인 정보가 올바르지 않습니다',
          description: '이메일 주소와 비밀번호를 다시 확인해주세요.',
          emoji: '❌'
        }
      case 'password_too_short':
        return {
          title: '비밀번호가 너무 짧습니다',
          description: '비밀번호는 최소 6자 이상이어야 합니다.',
          emoji: '🔒'
        }
      case 'missing_fields':
        return {
          title: '필수 정보가 누락되었습니다',
          description: '이메일과 비밀번호를 모두 입력해주세요.',
          emoji: '📝'
        }
      case 'signup_failed':
        return {
          title: '회원가입에 실패했습니다',
          description: '이미 사용 중인 이메일이거나 서버 오류일 수 있습니다.',
          emoji: '⚠️'
        }
      default:
        return {
          title: '오류가 발생했습니다',
          description: '로그인 또는 회원가입 중에 문제가 발생했습니다.',
          emoji: '😞'
        }
    }
  }

  const errorInfo = getErrorMessage(searchParams.message)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card className="p-6 text-center">
            <div className="mb-6">
              <div className="text-6xl mb-4">{errorInfo.emoji}</div>
              <h1 className="text-2xl font-bold text-primary mb-2">
                {errorInfo.title}
              </h1>
              <p className="text-muted-foreground">
                {errorInfo.description}
              </p>
            </div>

            <div className="space-y-3">
              <Link href="/login">
                <Button className="w-full">
                  다시 로그인 시도
                </Button>
              </Link>
              
              <Link href="/">
                <Button variant="outline" className="w-full">
                  메인 페이지로 돌아가기
                </Button>
              </Link>
            </div>

            <div className="mt-6 text-sm text-muted-foreground">
              <p>문제가 지속되면 다음을 확인해주세요:</p>
              <ul className="mt-2 text-left space-y-1">
                <li>• 이메일 주소가 올바른지 확인</li>
                <li>• 비밀번호가 6자 이상인지 확인</li>
                <li>• 인터넷 연결 상태 확인</li>
              </ul>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}