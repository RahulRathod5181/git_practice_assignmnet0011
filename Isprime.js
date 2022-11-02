let number = 23
let isprime = true;
for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    isprime = false;
    break;
  }
}
if (isprime == true) {
  console.log("Yes"+number+" is prime");
} else {
  console.log("No"+number+" is not prime");
}