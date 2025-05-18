import { NextResponse } from "next/server"

// This is a mock API endpoint that would return the test results
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const runId = searchParams.get("runId")

  // In a real application, this would come from a database or file system
  const testResults = {
    id: runId || "run-123456",
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

  return NextResponse.json(testResults)
}
