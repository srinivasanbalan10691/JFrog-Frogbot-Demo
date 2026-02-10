// SAST: eval() vulnerability
const userInput = process.argv[2];
eval(userInput); // DANGEROUS - Frogbot detects this

// SAST: SQL injection
const query = `SELECT * FROM users WHERE id = ${userInput}`;
