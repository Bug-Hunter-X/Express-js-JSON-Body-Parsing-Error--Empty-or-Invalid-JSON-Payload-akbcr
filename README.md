# Express.js JSON Body Parsing Error: Empty or Invalid JSON Payload

This repository demonstrates a common error in Express.js applications where the JSON body parsing middleware fails to handle empty or invalid JSON payloads.  The server may crash, return an error (like 400 Bad Request), or silently process an empty object, potentially leading to unexpected behavior.

## Bug Description

The provided `bug.js` code uses `express.json()` middleware to parse incoming JSON data. However, it doesn't handle cases where the request body is empty or doesn't adhere to the JSON format. This can lead to errors when handling POST requests that lack or have incorrect JSON.

## Solution

The `bugSolution.js` file demonstrates the solution which handles these cases gracefully by checking for the existence and validity of the request body before processing it.