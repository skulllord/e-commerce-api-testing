import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TestSuiteList } from "@/components/test-suite-list"
import { TestResults } from "@/components/test-results"
import { TestHistory } from "@/components/test-history"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardStats } from "@/components/dashboard-stats"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">API Testing Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button>Run All Tests</Button>
          </div>
        </div>
        <DashboardStats />
        <Tabs defaultValue="test-suites" className="space-y-4">
          <TabsList>
            <TabsTrigger value="test-suites">Test Suites</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          <TabsContent value="test-suites" className="space-y-4">
            <TestSuiteList />
          </TabsContent>
          <TabsContent value="results" className="space-y-4">
            <TestResults />
          </TabsContent>
          <TabsContent value="history" className="space-y-4">
            <TestHistory />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
