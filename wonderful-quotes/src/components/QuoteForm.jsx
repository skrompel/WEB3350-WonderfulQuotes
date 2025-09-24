import React, { useState } from "react";

function QuoteForm({ addQuote }) {
  const [quote, setQuote] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quote.trim() === "") {
      setError(true);
      return;
    }
    addQuote(quote);
    setQuote("");
    setError(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
        placeholder="Enter your quote here..."
        className={error ? "error" : ""}
      />
      <button type="submit">Add Quote</button>
      {error && <div className="error-message">Quote cannot be blank!</div>}
    </form>
  );
}

export default QuoteForm;
