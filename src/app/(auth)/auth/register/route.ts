import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  const supabase = createRouteHandlerClient<any>({ cookies })

  await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${requestUrl.origin}/auth/callback`,
    },
  })

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
      return NextResponse.redirect(requestUrl.origin + "/register?error=true", {
      status: 301,
    })
  }

  return NextResponse.redirect(requestUrl.origin + "/verify-email", {
    status: 301,
  })
}
