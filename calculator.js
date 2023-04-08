
const express = require("express");
const bodyParser = require("body-parser");
 
const app = express();
 
app.use(bodyParser.urlencoded({ extended: true}));

 
app.get("/bmiCalculator", (req, res) => {
    
    res.sendFile(__dirname + "/bmiCalculator.html");
    
});
 
app.post("/bmiCalculator", (req, res) => {
    
    var Weight = parseFloat(req.body.Weight);
    var Height = parseFloat(req.body.Height);
 
    var bmi = Math.round(Weight / (Height * Height));
 
    
    res.send("Your BMI Calculation is " + bmi);
});

app.listen(3000, function(){
    console.log("Server is running on 3000");
})
