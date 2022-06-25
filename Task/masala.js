function reverseString(str) {
  let newString = "";
  str = str.trim();

  for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
      if(newString.length >= 2 && str.includes(newString)) {
        console.log("Polindrom")
        return; 
      }else{
        continue;
      }
  }
  console.log("Polindrom emas");
  return;
}
let string = prompt('Enter a string: ');

console.log(reverseString(string));