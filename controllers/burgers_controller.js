var express = require("express");

var router = express.Router();
var burgers = require("../models/burger.js");
const burger = require("../../cu-nyc-fsf-pt-07-2020-u-c/13-MVC/02-Homework/Main/BurgerSolution/models/burger.js");

router.get("/", function(req, res){
    res.redirect("/burgers")
})

router.get("/burgers", function (req, res){
    burger.all(function(burgerData){
        res.render("index", {burger_data: burgerData})
    })
})

router.post()

router.put()
module.exports = router;