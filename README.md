# Experiment 2B: Working with APIs — Student Manager REST API

## Step 1: Clone the Repository

```bash
git clone https://github.com/suruthisagar2007/restfulapi.git
```

## Step 2: Navigate to the Project Folder

```bash
cd restfulapi
```

## Step 3: Initialize the Node.js Project (only if package.json is missing)

```bash
npm init -y
```

## Step 4: Install Required Dependencies

```bash
npm install express body-parser
```

## Step 5: Start the Server

```bash
node server.js
```

Expected output:

```text
Server running at http://localhost:5001
```

## Step 6: Test the API in Postman

### 1. Welcome Message

```http
GET http://localhost:5001/
```

### 2. Get All Students

```http
GET http://localhost:5001/students
```

### 3. Get Student by ID

```http
GET http://localhost:5001/students/1
```

### 4. Add a Student

```http
POST http://localhost:5001/students
```

In Postman, select **Body → raw → JSON**:

```json
{
  "name": "ARUN",
  "department": "IT",
  "marks": 75
}
```

### 5. Update a Student

```http
PUT http://localhost:5001/students/1
```

In Postman, select **Body → raw → JSON**:

```json
{
  "name": "ASWIN",
  "department": "IT",
  "marks": 90
}
```

### 6. Delete a Student

```http
DELETE http://localhost:5001/students/1
```

## GitHub Repository

https://github.com/suruthisagar2007/restfulapi

## Important Note

Student records are stored in an in-memory JavaScript array. Data resets when the server restarts.








prompt:
Create a complete website for the following practical exam question:

[PASTE QUESTION HERE]

Requirements:

1. Create a simple frontend using the technology specified in the question.
2. Create a backend with REST API.
3. Connect the database if required.
4. Implement all necessary operations:
   - GET – View all records
   - GET /:id – Search by ID
   - POST – Add new record
   - PUT /:id – Update record
   - DELETE /:id – Delete record
5. Connect frontend buttons and forms to the corresponding API endpoints.
6. Display all API URLs and their HTTP methods.
7. Provide sample JSON for testing in Postman.
8. Use minimum lines of code with proper spacing.
9. Keep the website very simple, without fancy CSS, animations or unnecessary files.
10. Give step-by-step VS Code terminal commands to install dependencies and run the application.
11. Provide sample input and expected output.
12. Ensure the application runs without errors.

IMPORTANT:
Follow the exact question. Do not add unnecessary features. Make the code beginner-friendly and easy to explain during viva.
