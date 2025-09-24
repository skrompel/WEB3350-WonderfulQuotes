import React from "react";

function QuoteItem({ quote, index, deleteQuote, editQuote }) {
  const handleEdit = () => {
    const updatedQuote = prompt("Edit your quote:", quote);
    if (updatedQuote !== null && updatedQuote.trim() !== "") {
      editQuote(index, updatedQuote);
    }
  };

  return (
    <div className="quote-item">
      <p>{quote}</p>
      <div className="quote-actions">
        <button onClick={handleEdit} className="edit-btn">
          Edit
        </button>
        <button onClick={() => deleteQuote(index)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default QuoteItem;
