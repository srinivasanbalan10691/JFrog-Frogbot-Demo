// SAST #1: SQL Injection
const userId = req.query.id;
const query = `SELECT * FROM users WHERE id = ${userId}`; // UNSAFE!
db.query(query);

// SAST #2: eval() vulnerability
const userCode = req.body.code;
eval(userCode); // DANGEROUS - Frogbot detects

// SAST #3: Command injection
const cmd = req.query.command;
require('child_process').exec(cmd); // UNSAFE!
