const express = require("express");
//here we will pring the lib for express  will pring back all the opj

//step 2 to call the opj

const app = express();

//أحدى الدوال هي liseane فتحت منفذ عشان يسمع من خلال الكمبيوتر
/*

الفعل او الطلب والثاني ردة الفعل 

انتي بطلة سمر ورح توصلي مكان عالي عالي ان شاء الله 



*/
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.set("view engine", "ejs");

//Step 4

app.get(
  "/home",

  function (req, res) {
    //res.send("welcome to the javascript bootcamp");
    res.render("home.ejs");
  }
);

app.get("/html", function (req, res) {
  // res.send("Welcome to Tuwaiq Samar Saleh");
  const Result = 100;
  res.render("Main.ejs",{ Result2: Result });
});

//res.send(req.params.id) for path paramiter how we wil use the path paramiter. 

app.post("/Main", function (req, res) {
  // res.send("Welcome to Tuwaiq " + req );
  const Result = 100;
  //res.send(req.body.value);
  const res1 = req.body.value;
  res.render("Main.ejs",{ Result2:Result, res1});
  //res.send(req.query)
  
});


/*
app.get("/Post", function (req, res) {
  const Result = 100;
  res.render("Main.ejs",{ Result2:Result , res});
});
*/
/*
app.get("/name", function (req, res) {
  res.send("welcome to the javascript bootcamp Samar");
});*/

//STEP3
app.listen(8000, function () {
  console.log("listening");
});

//npx nodemon app.js to run with the update.
