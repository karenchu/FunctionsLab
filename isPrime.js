function isPrime(n) {
	for (var i = 2; i <= Math.sqrt(n); i+=1) {
      if (n%i===0) {
		return false;
	}
   }
   return true;
}
console.log(isPrime(64));