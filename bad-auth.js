// SAST #4: Hardcoded credentials
const password = "admin123";
const apiKey = "sk-1234567890abcdef";

// SAST #5: Insecure comparison
if (user.password == input.password) {  // UNSAFE! Use ===
    login();
}
