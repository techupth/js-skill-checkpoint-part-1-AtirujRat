// Question #3
let userPassword = "123456789";
// เริ่มเขียนโค้ดตรงนี้

function checkPasswordStrength(password) {
  if (password.length <= 5) {
    return "Weak";
  } else if (password.length >= 6 && password.length <= 9) {
    return "Medium";
  } else {
    return "Strong";
  }
}

console.log(checkPasswordStrength(userPassword));
