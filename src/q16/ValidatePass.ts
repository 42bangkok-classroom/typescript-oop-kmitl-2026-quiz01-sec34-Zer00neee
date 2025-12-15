const password = process.argv[2] || "";
const hasMinLength = password.length >= 8;
const hasNumber = /[0-9]/.test(password);
const hasUppercase = /[A-Z]/.test(password);
if (hasMinLength && hasNumber && hasUppercase) {
  console.log("Valid");
} else {
  console.log("Invalid");
}
