function fibonacci(n) {
  let first = 0
  let second = 1
  let fib = 1
  while (fib <= n) {
    fib = first + second
    first = second
    second = fib
  }
  return fib
}

console.log(fibonacci(20))