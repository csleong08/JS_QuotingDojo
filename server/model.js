const goose = require("mongoose");

goose.connect("mongodb://localhost:27017/QuotingDojo", {useNewUrlParser:true}, (errs)=>console.log(errs?errs:"db gucci"));

const QuoteSchema = new goose.Schema({
    name: {
        type: String, 
        required: true,
        minlength: [2, "Your name has to be a minimum of two letters"]
    },
    quote: {
        type: String,
        required: true, 
        minlength: [10, "Your quote has be a minimum of 10 characters"]
    }
}, {timestamps:true});

const Quotes = goose.model('quotes', QuoteSchema);

module.exports = Quotes;