function fact(n) {
  if( n<=1 ) return n;
  return n*fact(n-1);
}
for (var i=1; i<10; i++) {
  console.log(i + "! =" + fact(i));
}

// 1! = 1
// 2! = 2
// 3! = 6