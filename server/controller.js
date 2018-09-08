const moment = require("moment");

module.exports = 
{
    home:home,
    quotes:allQuotes,
    makeQuote:makeQuote
}

const Quotes = require("./model.js");

function home(req,res)
{
    console.log("hit root route");
    res.render("index");
};

function allQuotes (req,res)
{
    console.log("hit quotes route");
    Quotes.find({}, function(errs, data)
    {
        console.log(data);
        if(errs)
        {
            console.log(errs)
        }
        res.render("quotes", {data:data.reverse(), moment:moment});
    })
};

function makeQuote(req,res)
{
    console.log("make quotes");
    console.log(req.body);
    Quotes.create(req.body, (errs, results)=>
    {
        if(errs)
        {
            console.log("opps i did it again");
            console.log(errs);
            for (var key in errs.errors)
            {
                console.log(errs.errors[key].message);
                req.flash("registration", errs.errors[key].message);
            }
            res.redirect('/');
        }else{
            console.log(results);
            res.redirect("/quotes");
        }
    })
};