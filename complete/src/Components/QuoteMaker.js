import { useEffect, useState } from "react";
import "../CSS/QuoteMaker.css";
const axios = require('axios');

export const QuoteMaker = () => {
    let [quote, setQuote] = useState();
    let [author, setAuthor] = useState();

    useEffect(() => {
        getQuote();
    },[]);

    async function getQuote() {
        let data = await axios.get("https://api.quotable.io/random");
        let quoteData = data.data.content;
        let authorData = data.data.author;
        console.log(quoteData + " " + authorData);
        setQuote(quoteData);
        setAuthor(authorData);
    }

    return(
        <div className="makerField">
            <div className="textField">
                <div id="quote">
                    {quote}
                </div>
                <div id="author">
                    {author}
                </div>
            </div>
            <button id="refresh" onClick={getQuote}>NEW QUOTE</button>
        </div>
    )
}