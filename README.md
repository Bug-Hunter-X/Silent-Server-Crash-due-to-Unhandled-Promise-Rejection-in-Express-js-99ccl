# Silent Server Crash in Express.js due to Unhandled Promise Rejection

This repository demonstrates a common but easily overlooked error in Express.js applications: unhandled promise rejections.  When asynchronous operations within your Express routes throw errors without proper error handling, the server might crash silently, making debugging difficult.

## The Problem

The `bug.js` file contains an Express.js server with a route that performs an asynchronous operation. This operation has a 50% chance of throwing an error. However, the `catch` block in the `.then().catch()` chain is insufficient; it only logs the error to the console but doesn't handle it properly.  As a result, the server will crash without any clear indication of the problem.

## The Solution

The `bugSolution.js` file demonstrates the correct way to handle promise rejections. It utilizes a `process.on('unhandledRejection', ...)` event listener to gracefully handle uncaught promise rejections, preventing server crashes and providing informative error messages.  Additionally, the original error handling is improved to properly respond to the client with an appropriate error status code.

## How to reproduce the bug
1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`.
4. Refresh the page a few times; the server will likely crash after a few requests.

## How to run the solution
1. Run `node bugSolution.js`.
2. Refresh the page multiple times; the server will handle errors gracefully.