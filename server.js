const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5001;

app.use(bodyParser.json());

let students = [
    { id: 1, name: "ASWIN", department: "IT", marks: 80 },
    { id: 2, name: "KUMAR", department: "CSE", marks: 76 }
];

// Welcome route
app.get('/', (req, res) => {
    res.send("Welcome to the Student Manager API");
});

// Get all students
app.get('/students', (req, res) => {
    res.json(students);
});

// Get student by ID
app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);

    if (!student) {
        return res.status(404).json({ error: "Student not found" });
    }

    res.json(student);
});

// Add a student
app.post('/students', (req, res) => {
    const { name, department, marks } = req.body;

    if (!name || !department || marks === undefined) {
        return res.status(400).json({
            error: "Name, department and marks are required"
        });
    }

    const newStudent = {
        id: students.length
            ? Math.max(...students.map(s => s.id)) + 1
            : 1,
        name,
        department,
        marks
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
});

// Update a student
app.put('/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);

    if (!student) {
        return res.status(404).json({ error: "Student not found" });
    }

    const { name, department, marks } = req.body;

    if (name !== undefined) student.name = name;
    if (department !== undefined) student.department = department;
    if (marks !== undefined) student.marks = marks;

    res.json(student);
});

// Delete a student
app.delete('/students/:id', (req, res) => {
    const index = students.findIndex(s => s.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({ error: "Student not found" });
    }

    students.splice(index, 1);

    res.json({ message: "Student deleted successfully" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});