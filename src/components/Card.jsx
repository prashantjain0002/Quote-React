import React, { useState, useEffect } from "react";
import axios from "axios";
import './style.css'

const Card = () => {
  const [quote, setQuote] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get(
          "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
        );
        setQuote(response.data[0]);
      } catch (err) {
        setError(err);
      }
    };

    fetchQuote();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="card">
      <h2>Today's Quote</h2>
      <p>{`" ${quote} "`}</p>
    </div>
  );
};

export default Card;
