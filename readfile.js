const {readFile, writeFile} = require('fs');

/* const first = readFileSync("./content/subfolder/first.txt","utf-8");
const second = readFileSync("./content/subfolder/second.txt","utf-8");
writeFileSync("./content/subfolder/result.txt", "the result is _______0_");
console.log(first +" "+ second); */
readFile("./content/subfolder/first.txt","utf-8",(err,result)=>{
  console.log(result);
})

