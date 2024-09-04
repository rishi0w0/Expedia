'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, CheckCircle } from 'lucide-react'

export default function LoginSuccessPage() {
  const router = useRouter()

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('/dashboard')
    }, 3000)

    return () => clearTimeout(redirectTimer)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-center">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2" />
            Login Successful
          </CardTitle>
          <CardDescription className="text-center">
            Welcome back to Wanderer!
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">You will be redirected to your dashboard in a few seconds.</p>
          <div className="flex justify-center">
            <Loader2 className="w-6 h-6 animate-spin" />
          </div>
          <Button 
            className="mt-4" 
            onClick={() => router.push('/dashboard')}
          >
            Go to Dashboard Now
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}