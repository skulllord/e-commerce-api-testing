"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { PlayIcon, FolderIcon, SettingsIcon } from "lucide-react"
import { useState } from "react"

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

export function TestSuiteList() {
  const [selectedSuites, setSelectedSuites] = useState<string[]>([])

  const toggleSuite = (id: string) => {
    setSelectedSuites((prev) => (prev.includes(id) ? prev.filter((suiteId) => suiteId !== id) : [...prev, id]))
  }

  const selectAll = () => {
    if (selectedSuites.length === testSuites.length) {
      setSelectedSuites([])
    } else {
      setSelectedSuites(testSuites.map((suite) => suite.id))
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="select-all"
            checked={selectedSuites.length === testSuites.length && testSuites.length > 0}
            onCheckedChange={selectAll}
          />
          <label
            htmlFor="select-all"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Select All
          </label>
        </div>
        <Button disabled={selectedSuites.length === 0}>
          <PlayIcon className="mr-2 h-4 w-4" />
          Run Selected
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testSuites.map((suite) => (
          <Card key={suite.id} className={selectedSuites.includes(suite.id) ? "border-primary" : ""}>
            <CardHeader className="flex flex-row items-start justify-between space-y-0">
              <div className="flex space-x-2">
                <Checkbox
                  id={`select-${suite.id}`}
                  checked={selectedSuites.includes(suite.id)}
                  onCheckedChange={() => toggleSuite(suite.id)}
                />
                <div>
                  <CardTitle>{suite.name}</CardTitle>
                  <CardDescription>{suite.description}</CardDescription>
                </div>
              </div>
              <Badge variant={suite.status === "passed" ? "default" : "destructive"}>{suite.status}</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-sm">
                <p>Tests: {suite.testCount}</p>
                <p>Last run: {suite.lastRun}</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <FolderIcon className="mr-2 h-4 w-4" />
                View Tests
              </Button>
              <Button variant="outline" size="sm">
                <SettingsIcon className="mr-2 h-4 w-4" />
                Configure
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
