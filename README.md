# Welcome to the Calculator-Server-Side Project

## Project Overview

This project implements a **client-server calculator**. The **client** sends a mathematical formula to the **server**, which processes the calculation and returns the result.

### Supported Operations:
- **Basic Operations:**
  - Addition (`+`)
  - Subtraction (`-`)
  - Multiplication (`*`)
  - Division (`/`)
  - Exponentiation (`^`)

- **Advanced Functions:**
  - **Square Root** (`sqrt(x)`)
  - **Logarithms** (`log(x)` for natural log, `log10(x)` for base-10 logarithm)
  - **Trigonometric Functions** (`sin(x)`, `cos(x)`, `tan(x)`)
  - **Inverse Trigonometric Functions** (`asin(x)`, `acos(x)`, `atan(x)`)
  - **Other Functions**: (`abs(x)` for absolute value, `exp(x)` for exponential, `factorial(x)`)

- **Order of Operations**: The server respects the **order of operations** (BIDMAS/BODMAS rules) and handles the **use of parentheses** `()` to alter the calculation order.

## Project Setup

### How to Edit and Run the Code

There are multiple ways to interact with and modify this project. Below are the instructions to get started.

### 1. **Using Your Preferred IDE**

If you'd like to work locally using your preferred IDE, you can clone the repository and push your changes. These changes will be reflected in the repository.

#### Requirements
- **Node.js & npm**: You need **Node.js** and **npm** installed. You can install them via **[nvm](https://github.com/nvm-sh/nvm#installing-and-updating)** if you don't have them yet.

#### Steps to Get Started

# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd Calculator-Server-Side

# Step 3: Install the necessary dependencies.
npm install

# Step 4: Start the development server to test the calculator functionality.
npm run dev
