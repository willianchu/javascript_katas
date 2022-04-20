# We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

# If the number is a multiple of 3, print the string "Loopy" instead of the number.
# If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
# If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
# By print, we are referring to console.log.

const NUMBER = 200;

const loopy = (number) => {
  for (let i = 100; i <= number; i++) {
    if (i % 3 === 0 && i % 4 === 0) {
      console.log("LoopyLighthouse");
    } else if (i % 3 === 0) {
      console.log("Loopy");
    } else if (i % 4 === 0) {
      console.log("Lighthouse");
    } else {
      console.log(i);
    }
  }
};

loopy(NUMBER);