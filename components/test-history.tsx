import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, XCircle, PlayCircle, FileTextIcon } from "lucide-react"
import { Chart } from "@/components/ui/chart"

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

const trendData = {
  dates: ["May 14", "May 15", "May 16", "May 17", "May 18"],
  passed: [23, 24, 22, 24, 21],
  failed: [1, 0, 2, 0, 3],
}

export function TestHistory() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Test Run History</CardTitle>
          <CardDescription>View past test runs and performance trends</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="h-[300px]">
            <Chart
              type="bar"
              height={300}
              options={{
                chart: {
                  stacked: true,
                  toolbar: {
                    show: false,
                  },
                },
                plotOptions: {
                  bar: {
                    horizontal: false,
                  },
                },
                xaxis: {
                  categories: trendData.dates,
                },
                legend: {
                  position: "top",
                },
                fill: {
                  opacity: 1,
                },
              }}
              series={[
                {
                  name: "Passed",
                  data: trendData.passed,
                  color: "#10b981",
                },
                {
                  name: "Failed",
                  data: trendData.failed,
                  color: "#ef4444",
                },
              ]}
            />
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Run ID</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Tests</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {testHistory.map((run) => (
                <TableRow key={run.id}>
                  <TableCell className="font-medium">{run.id}</TableCell>
                  <TableCell>{new Date(run.timestamp).toLocaleString()}</TableCell>
                  <TableCell>{run.duration}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{run.passed}</span>
                      <span className="mx-1">/</span>
                      <XCircle className="h-4 w-4 text-red-500" />
                      <span>{run.failed}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={run.status === "passed" ? "default" : "destructive"}>{run.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm">
                        <FileTextIcon className="h-4 w-4" />
                        <span className="sr-only">View Report</span>
                      </Button>
                      <Button variant="outline" size="sm">
                        <PlayCircle className="h-4 w-4" />
                        <span className="sr-only">Rerun</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
