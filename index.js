const express = require("express")
const app = express()
app.use(express.json())

const now = new Date()
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const time = now.getTime();
const fileName = year + "-" + month + "-" + date + "-" + time;
const current_time = new Date().toISOString();

//file creation
const fs = require("fs");
fs.writeFile(`${fileName}.txt`, current_time, function (err) {
    console.log("file created succesfully");
    console.log(err)
});

let datas = [];
fs.readdir("./", function (err, list) { datas.push(list) })

//api endpoint
app.get("/", (req, res) => {
    res.json({ datas });
});

app.listen(3000);