/** This function take in parameter a number and return if it is prime or not */
const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i < n / 2 + 1; i++) {
    if (n % i === 0) return false;
  }
  return true;
};
