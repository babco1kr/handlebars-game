var coasters = require("../models/coaster.js");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    coasters.ridden(function(data) {
        let object = {
            coasters: data
        };
        res.render("index", object);
    })
})




module.exports = router;