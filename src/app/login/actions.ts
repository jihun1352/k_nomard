'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  try {
    const supabase = await createClient()

    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }

    const { error, data: authData } = await supabase.auth.signInWithPassword(data)

    if (error) {
      console.error('Login error:', error.message)
      if (error.message === 'Email not confirmed') {
        redirect('/error?message=email_not_confirmed')
      } else if (error.message === 'Invalid login credentials') {
        redirect('/error?message=invalid_credentials')
      } else {
        redirect('/error?message=login_failed')
      }
    }

    // 로그인 성공
    console.log('User logged in successfully:', authData.user?.email)

    revalidatePath('/', 'layout')
    redirect('/')
  } catch (error) {
    console.error('Unexpected login error:', error)
    redirect('/error?message=unexpected_error')
  }
}

export async function signup(formData: FormData) {
  try {
    const supabase = await createClient()

    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }

    // 입력 검증
    if (!data.email || !data.password) {
      redirect('/error?message=missing_fields')
    }

    if (data.password.length < 6) {
      redirect('/error?message=password_too_short')
    }

    const { error, data: authData } = await supabase.auth.signUp({
      ...data,
      options: {
        emailRedirectTo: undefined
      }
    })

    if (error) {
      console.error('Signup error:', error.message)
      redirect('/error?message=signup_failed')
    }

    // 회원가입 성공
    console.log('User signed up successfully:', authData.user?.email)
    
    revalidatePath('/', 'layout')
    redirect('/?message=signup_success')
  } catch (error) {
    console.error('Unexpected signup error:', error)
    redirect('/error?message=unexpected_error')
  }
}