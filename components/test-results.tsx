import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, XCircle, AlertCircle, Clock } from "lucide-react"
import { Chart } from "@/components/ui/chart"

const testResults = {
  id: "run-123456",
  timestamp: "2023-05-18T13:30:00Z",
  duration: "1m 45s",
  totalTests: 24,
  passed: 21,
  failed: 3,
  skipped: 0,
  suites: [
    {
      id: "auth",
      name: "Authentication",
      tests: [
        { id: "auth-1", name: "Login - Valid Credentials", status: "passed", duration: "245ms" },
        { id: "auth-2", name: "Login - Invalid Credentials", status: "passed", duration: "220ms" },
        { id: "auth-3", name: "Login - Empty Credentials", status: "passed", duration: "210ms" },
        { id: "auth-4", name: "Logout", status: "passed", duration: "180ms" },
        { id: "auth-5", name: "Register - Valid Data", status: "passed", duration: "260ms" },
        { id: "auth-6", name: "Register - Invalid Data", status: "passed", duration: "230ms" },
      ],
    },
    {
      id: "products",
      name: "Products",
      tests: [
        { id: "prod-1", name: "Get All Products", status: "passed", duration: "350ms" },
        { id: "prod-2", name: "Get Product by ID", status: "passed", duration: "280ms" },
        { id: "prod-3", name: "Get Product - Invalid ID", status: "passed", duration: "240ms" },
        { id: "prod-4", name: "Get Products by Category", status: "passed", duration: "320ms" },
        { id: "prod-5", name: "Get All Categories", status: "passed", duration: "210ms" },
        {
          id: "prod-6",
          name: "Create Product",
          status: "failed",
          duration: "450ms",
          error: "Expected status code 201, got 403",
        },
        {
          id: "prod-7",
          name: "Update Product",
          status: "failed",
          duration: "420ms",
          error: "Expected status code 200, got 403",
        },
        {
          id: "prod-8",
          name: "Delete Product",
          status: "failed",
          duration: "380ms",
          error: "Expected status code 200, got 403",
        },
      ],
    },
    {
      id: "cart",
      name: "Cart",
      tests: [
        { id: "cart-1", name: "Get User Cart", status: "passed", duration: "290ms" },
        { id: "cart-2", name: "Add to Cart", status: "passed", duration: "340ms" },
        { id: "cart-3", name: "Update Cart", status: "passed", duration: "320ms" },
        { id: "cart-4", name: "Delete Cart", status: "passed", duration: "270ms" },
        { id: "cart-5", name: "Get All Carts", status: "passed", duration: "380ms" },
        { id: "cart-6", name: "Get Cart by ID", status: "passed", duration: "260ms" },
      ],
    },
    {
      id: "checkout",
      name: "Checkout",
      tests: [
        { id: "check-1", name: "Create Order", status: "passed", duration: "420ms" },
        { id: "check-2", name: "Get Order", status: "passed", duration: "280ms" },
        { id: "check-3", name: "Get All Orders", status: "passed", duration: "350ms" },
        { id: "check-4", name: "Delete Order", status: "passed", duration: "290ms" },
      ],
    },
  ],
}

export function TestResults() {
  const passRate = (testResults.passed / testResults.totalTests) * 100

  const chartData = [
    { name: "Passed", value: testResults.passed },
    { name: "Failed", value: testResults.failed },
    { name: "Skipped", value: testResults.skipped },
  ]

  const colors = ["#10b981", "#ef4444", "#f59e0b"]

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Latest Test Run</CardTitle>
          <CardDescription>
            Run ID: {testResults.id} • {new Date(testResults.timestamp).toLocaleString()}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Pass Rate</p>
                  <p className="text-2xl font-bold">{passRate.toFixed(1)}%</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Duration</p>
                  <p className="text-2xl font-bold">{testResults.duration}</p>
                </div>
              </div>
              <Progress value={passRate} className="h-2" />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <p className="text-xs font-medium">Passed</p>
                  <p className="text-lg font-bold">{testResults.passed}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center">
                    <XCircle className="h-5 w-5 text-red-500" />
                  </div>
                  <p className="text-xs font-medium">Failed</p>
                  <p className="text-lg font-bold">{testResults.failed}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <p className="text-xs font-medium">Total</p>
                  <p className="text-lg font-bold">{testResults.totalTests}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center h-[200px]">
              <Chart
                type="pie"
                width={200}
                height={200}
                series={chartData.map((item) => item.value)}
                options={{
                  labels: chartData.map((item) => item.name),
                  colors: colors,
                  legend: {
                    show: true,
                    position: "bottom",
                  },
                  dataLabels: {
                    enabled: false,
                  },
                  plotOptions: {
                    pie: {
                      donut: {
                        size: "65%",
                      },
                    },
                  },
                }}
              />
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {testResults.suites.map((suite) => (
              <AccordionItem key={suite.id} value={suite.id}>
                <AccordionTrigger>
                  <div className="flex items-center justify-between w-full pr-4">
                    <span>{suite.name}</span>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="ml-2">
                        {suite.tests.length} tests
                      </Badge>
                      <Badge variant={suite.tests.some((t) => t.status === "failed") ? "destructive" : "default"}>
                        {suite.tests.filter((t) => t.status === "passed").length}/{suite.tests.length} passed
                      </Badge>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {suite.tests.map((test) => (
                      <div key={test.id} className="flex items-center justify-between p-2 rounded-md border">
                        <div className="flex items-center space-x-2">
                          {test.status === "passed" ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : test.status === "failed" ? (
                            <XCircle className="h-4 w-4 text-red-500" />
                          ) : (
                            <AlertCircle className="h-4 w-4 text-yellow-500" />
                          )}
                          <span>{test.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{test.duration}</Badge>
                          <Badge variant={test.status === "passed" ? "default" : "destructive"}>{test.status}</Badge>
                        </div>
                      </div>
                    ))}
                    {suite.tests.some((t) => t.status === "failed") && (
                      <div className="mt-4 p-4 rounded-md bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
                        <h4 className="text-sm font-medium text-red-800 dark:text-red-300 mb-2">Errors</h4>
                        <div className="space-y-2">
                          {suite.tests
                            .filter((t) => t.status === "failed")
                            .map((test) => (
                              <div key={`${test.id}-error`} className="text-sm text-red-700 dark:text-red-400">
                                <span className="font-medium">{test.name}:</span> {test.error}
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}
