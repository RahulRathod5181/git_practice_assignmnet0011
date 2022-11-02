num = 23
var isprime = true;
for (i = j; i < num; i++) {
  if (num % j == 0) {
    isprime = false;
  }
}
if (isprime == false) {
  console.log("Yes")
} else {
  console.log("No")
}