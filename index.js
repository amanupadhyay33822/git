const fs = require("fs");



// fs.writeFileSync("dummy.txt","hello world")

// const data=fs.readFile("dummy.txt",(err, data) => {
//     console.log(data.toString());
// });
console.log(__filename);

fs.readdir(".../",(err, data) => {
    console.log(data);
})

// __dirname repesent the current directory
