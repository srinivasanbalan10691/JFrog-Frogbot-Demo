// MULTIPLE SAST VIOLATIONS - Copy this entire fi
const express = require('express');
const app = express();

// SQL Injection #1
app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM users WHERE id='${id}'`; // VIOLATION 1
    db.query(sql, (err, results) => res.json(results));
});

// eval() #2
app.post('/execute', (req, res) => {
    eval(req.body.code); // VIOLATION 2
    res.send('Executed');
});

// Command injection #3
const { exec } = require('child_process');
app.get('/run', (req, res) => {
    exec(req.query.cmd, (err, stdout) => res.send(stdout)); // VIOLATION 3
});

// Hardcoded secret #4
const AWS_SECRET = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"; // VIOLATION 4

app.listen(3000);
