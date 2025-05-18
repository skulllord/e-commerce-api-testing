// This service would handle the actual test execution and result processing
// For this demo, it's simplified and uses mock data

export interface TestSuite {
  id: string
  name: string
  description: string
  testCount: number
  lastRun: string
  status: string
}

export interface TestResult {
  id: string
  name: string
  status: string
  duration: string
  error?: string
}

export interface TestSuiteResult {
  id: string
  name: string
  tests: TestResult[]
}

export interface TestRunResult {
  id: string
  timestamp: string
  duration: string
  totalTests: number
  passed: number
  failed: number
  skipped: number
  suites: TestSuiteResult[]
}

export interface TestRunSummary {
  id: string
  timestamp: string
  duration: string
  totalTests: number
  passed: number
  failed: number
  status: string
}

export async function getTestSuites(): Promise<TestSuite[]> {
  const response = await fetch("/api/test-suites")
  if (!response.ok) {
    throw new Error("Failed to fetch test suites")
  }
  return response.json()
}

export async function getTestResults(runId?: string): Promise<TestRunResult> {
  const url = runId ? `/api/test-results?runId=${runId}` : "/api/test-results"
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error("Failed to fetch test results")
  }
  return response.json()
}

export async function getTestHistory(): Promise<TestRunSummary[]> {
  const response = await fetch("/api/test-history")
  if (!response.ok) {
    throw new Error("Failed to fetch test history")
  }
  return response.json()
}

export async function runTests(suiteIds: string[]): Promise<TestRunResult> {
  const response = await fetch("/api/run-tests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ suites: suiteIds }),
  })

  if (!response.ok) {
    throw new Error("Failed to run tests")
  }

  return response.json()
}
