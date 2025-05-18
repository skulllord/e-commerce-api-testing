# E-commerce API Test Cases

This document outlines the test cases implemented in our automated API testing framework.

## Authentication Tests

### Positive Tests
- **Login with Valid Credentials**: Verifies that a user can successfully log in with valid credentials and receives an authentication token.
  - Validates 200 status code
  - Validates token structure
  - Validates response time

### Negative Tests
- **Login with Invalid Credentials**: Verifies that the system properly handles login attempts with invalid credentials.
  - Validates 401 status code
  - Validates error message

## Product Tests

### Positive Tests
- **Get All Products**: Verifies that all products can be retrieved.
  - Validates 200 status code
  - Validates response structure (array of products)
  - Validates product properties
  - Validates response time

- **Get Product by ID**: Verifies that a specific product can be retrieved by its ID.
  - Validates 200 status code
  - Validates product structure
  - Validates data types

- **Get Products by Category**: Verifies that products can be filtered by category.
  - Validates 200 status code
  - Validates that all returned products belong to the specified category

### Negative Tests
- **Get Product with Invalid ID**: Verifies that the system properly handles requests for non-existent products.
  - Validates 404 status code
  - Validates error message

## Cart Tests

### Positive Tests
- **Get User Cart**: Verifies that a user's cart can be retrieved.
  - Validates 200 status code
  - Validates response structure

- **Add to Cart**: Verifies that products can be added to a cart.
  - Validates 200 status code
  - Validates cart structure
  - Validates that the added product is in the cart

- **Update Cart**: Verifies that a cart can be updated (e.g., changing product quantities).
  - Validates 200 status code
  - Validates that the product quantity is updated

- **Delete Cart**: Verifies that a cart can be deleted.
  - Validates 200 status code
  - Validates deletion confirmation

## Checkout Tests

### Positive Tests
- **Create Order**: Verifies that an order can be created.
  - Validates 200 status code
  - Validates order structure
  - Validates that the order contains the correct products

- **Get Order**: Verifies that an order can be retrieved.
  - Validates 200 status code
  - Validates order structure
  - Validates that the order contains the correct products

## Performance Tests

- **Products Listing Performance**: Verifies that the products listing API performs within acceptable limits.
  - Validates response time is under 1000ms
  - Validates response size is reasonable

## Edge Cases

- **Large Product List**: Tests the system's ability to handle requests for large numbers of products.
- **Concurrent Requests**: Tests the system's ability to handle multiple concurrent requests.
- **Boundary Values**: Tests the system's handling of boundary values (e.g., minimum/maximum quantities).

## Security Tests

- **Authentication Required**: Verifies that protected endpoints require authentication.
- **Input Validation**: Verifies that the API properly validates input data.
\`\`\`

## README with Setup and Usage Instructions

```md project="E-commerce API Testing" file="README.md" type="code"
# E-commerce API Testing Framework

This project provides a comprehensive automated testing framework for e-commerce APIs using Postman, Newman, and CI/CD integration.

## Features

- Complete test suite for e-commerce API endpoints
- Authentication testing
- Product listing and details testing
- Cart operations testing
- Checkout process testing
- Performance testing
- CI/CD integration with GitHub Actions and Jenkins
- Detailed HTML and JUnit test reports

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Postman (for local development and test authoring)
- Newman (for CLI execution)

## Setup

1. Clone this repository:
