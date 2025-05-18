import { NextResponse } from "next/server"

// This is a mock API endpoint that would return the test history
export async function GET() {
  // In a real application, this would come from a database or file system
  const testHistory = [
    {
      id: "run-123456",
      timestamp: "2023-05-18T13:30:00Z",
      duration: "1m 45s",
      totalTests: 24,
      passed: 21,
      failed: 3,
      status: "failed",
    },
    {
      id: "run-123455",
      timestamp: "2023-05-17T10:15:00Z",
      duration: "1m 40s",
      totalTests: 24,
      passed: 24,
      failed: 0,
      status: "passed",
    },
    {
      id: "run-123454",
      timestamp: "2023-05-16T14:20:00Z",
      duration: "1m 42s",
      totalTests: 24,
      passed: 22,
      failed: 2,
      status: "failed",
    },
    {
      id: "run-123453",
      timestamp: "2023-05-15T09:45:00Z",
      duration: "1m 38s",
      totalTests: 24,
      passed: 24,
      failed: 0,
      status: "passed",
    },
    {
      id: "run-123452",
      timestamp: "2023-05-14T16:30:00Z",
      duration: "1m 41s",
      totalTests: 24,
      passed: 23,
      failed: 1,
      status: "failed",
    },
  ]

  return NextResponse.json(testHistory)
}
