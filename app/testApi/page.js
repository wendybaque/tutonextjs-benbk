"use client";
import React from "react";
// link to API : https://dumbstockapi.com/stock?exchanges=NYSE
import { useState, useEffect } from "react";
import axios from "axios";
const api = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dumbstockapi.com/stock?exchanges=NYSE"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <ul>{data && data.map((item) => <li key={item.ticker}>{item.name}</li>)}</ul>
      )}
    </div>
  );
};

export default api;
