'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LogOut } from 'lucide-react'

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    // Here you would typically handle the logout logic (e.g., clear tokens, etc.)
    const logoutTimer = setTimeout(() => {
      router.push('/login')
    }, 3000)

    return () => clearTimeout(logoutTimer)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-center">
            <LogOut className="w-12 h-12 text-primary mx-auto mb-2" />
            Logged Out Successfully
          </CardTitle>
          <CardDescription className="text-center">
            Thank you for using Wanderer!
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">You have been successfully logged out. You will be redirected to the login page in a few seconds.</p>
          <Button 
            className="mt-4" 
            onClick={() => router.push('/login')}
          >
            Log In Again
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}