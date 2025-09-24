import React, { useState } from "react";
import QuoteForm from "./components/QuoteForm";
import QuoteList from "./components/QuoteList";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);

  const addQuote = (newQuote) => {
    setQuotes([...quotes, newQuote]);
  };

  const deleteQuote = (index) => {
    const newQuotes = quotes.filter((_, i) => i !== index);
    setQuotes(newQuotes);
  };

  const editQuote = (index, updatedQuote) => {
    const newQuotes = [...quotes];
    newQuotes[index] = updatedQuote;
    setQuotes(newQuotes);
  };

  return (
    <div className="app">
      <h1>Wonderful Quotes</h1>
      <QuoteForm addQuote={addQuote} />
      <QuoteList
        quotes={quotes}
        deleteQuote={deleteQuote}
        editQuote={editQuote}
      />
    </div>
  );
}

export default App;
