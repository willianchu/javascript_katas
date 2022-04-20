function urlEncode(string) {
  // let core = string.trim(); // remove spaces at the beginning and end
  // core = core.replace(/ {2,}/g, " "); // remove repeated spaces

  // return encodeURIComponent(core); // simple way

  let core = string.split(' ')
                .filter(word => word != '')
                .join(' ');
  return core.split(' ').join('%20'); // more complex way
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode("   Lighthouse  Labs    "));
console.log(urlEncode("blue is greener than purple for sure"));