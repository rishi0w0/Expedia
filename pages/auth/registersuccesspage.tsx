'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserPlus, Loader2 } from 'lucide-react'

export default function RegistrationSuccessPage() {
  const router = useRouter()

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('/onboarding')
    }, 5000)

    return () => clearTimeout(redirectTimer)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-center">
            <UserPlus className="w-12 h-12 text-green-500 mx-auto mb-2" />
            Registration Successful
          </CardTitle>
          <CardDescription className="text-center">
            Welcome to Wanderer!
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">Your account has been created successfully. You will be redirected to the onboarding process in a few seconds.</p>
          <div className="flex justify-center mb-4">
            <Loader2 className="w-6 h-6 animate-spin" />
          </div>
          <Button 
            className="mt-4" 
            onClick={() => router.push('/onboarding')}
          >
            Start Onboarding Now
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}