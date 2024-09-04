import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Mountain } from 'lucide-react'

export default function AuthPage() {
  console.log("AuthPage is rendering")
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-100">
      <h1 className="text-4xl font-bold text-black">Welcome to Wanderer</h1>
      <div className="text-center mb-8">
        <Mountain className="w-16 h-16 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">Welcome to Wanderer</h1>
        <p className="text-xl text-gray-600">Your AI-powered travel planning assistant</p>
      </div>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/register">Register</Link>
        </Button>
      </div>
      <div className="mt-4 space-x-4">
        <Button variant="link" asChild>
          <Link href="/docs">View Documentation</Link>
        </Button>
      </div>
    </div>
  )
}