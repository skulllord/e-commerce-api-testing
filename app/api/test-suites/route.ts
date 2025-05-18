import { NextResponse } from "next/server"

// This is a mock API endpoint that would return the available test suites
export async function GET() {
  // In a real application, this would come from a database or file system
  const testSuites = [
    {
      id: "auth",
      name: "Authentication",
      description: "Tests for user authentication endpoints",
      testCount: 6,
      lastRun: "10 minutes ago",
      status: "passed",
    },
    {
      id: "products",
      name: "Products",
      description: "Tests for product listing and details endpoints",
      testCount: 8,
      lastRun: "15 minutes ago",
      status: "failed",
    },
    {
      id: "cart",
      name: "Cart",
      description: "Tests for cart operations endpoints",
      testCount: 6,
      lastRun: "20 minutes ago",
      status: "passed",
    },
    {
      id: "checkout",
      name: "Checkout",
      description: "Tests for checkout process endpoints",
      testCount: 4,
      lastRun: "25 minutes ago",
      status: "passed",
    },
  ]

  return NextResponse.json(testSuites)
}
