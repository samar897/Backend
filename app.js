const express = require("express");
//here we will pring the lib for express  will pring back all the opj

//step 2 to call the opj

const app = express();

//أحدى الدوال هي liseane فتحت منفذ عشان يسمع من خلال الكمبيوتر
/*

الفعل او الطلب والثاني ردة الفعل 

انتي بطلة سمر ورح توصلي مكان عالي عالي ان شاء الله 



*/

//Step 4

app.get(
  "/",

  function (req, res) {
    res.send("welcome to the javascript bootcamp");
  }
);

app.get("/hi", function (req, res) {
  res.send("Welcome to Tuwaiq Samar Saleh");
});

app.get("/name", function (req, res) {
  res.send("welcome to the javascript bootcamp Samar");
});

//STEP3
app.listen(8000, function () {
  console.log("listening");
});

//npx nodemon app.js to run with the update
