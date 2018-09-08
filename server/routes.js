const {home, quotes, makeQuote} = require("./controller.js");

function router(app)
{
    app.get("/", home);
    app.get("/quotes", quotes);
    app.post("/makeQuote", makeQuote);
}

module.exports = router;