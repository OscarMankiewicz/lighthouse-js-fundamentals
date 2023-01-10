//loops starts counting from 100 by 1 stopping at 200
for (let num = 100; num <= 200; num++) {
  //checks for multiples of 3 & 4 and prints LoopyLighthouse into the console
  if (num % 3 === 0 && num % 4 === 0) {
    console.log("LoopyLighthouse");
  //checks for multiples of 4 and prints Lighthouse into the console
  } else if (num % 4 === 0) {
    console.log("Lighthouse");
  //check for multiples of 3 and prints Loopy into the console
  } else if (num % 3 === 0 ) {
    console.log("Loopy");
  } else {
    console.log(num);
  }
}
