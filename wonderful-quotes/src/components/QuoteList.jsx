import React from "react";
import QuoteItem from "./QuoteItem";

function QuoteList({ quotes, deleteQuote, editQuote }) {
  return (
    <div className="quote-list">
      {quotes.map((quote, index) => (
        <QuoteItem
          key={index}
          quote={quote}
          index={index}
          deleteQuote={deleteQuote}
          editQuote={editQuote}
        />
      ))}
    </div>
  );
}

export default QuoteList;
