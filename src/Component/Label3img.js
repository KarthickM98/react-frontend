import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Label3img = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:8000/api/v1/data3/homed")
        .then((req, res) => {
          const response = req.data;
          setData(response);
          console.log("hii, data recieved here, label 3 img");
        })
        .catch(() => console.log("error"));
    }
    fetchData();
  }, []);
  return (
    <div className="label3">
      {data
        .filter((last) => last.id === data[data.length - 1].id)
        .map((last, index) => {
          return (
            <Link
              to={`/${last.category}/${last.id}`}
              className="link2"
              key={index}
            >
              <p>
                <h1>{last.title}</h1>
                <br />
                <span>
                  <b>{last.category}</b> / {last.date}
                </span>
              </p>
              <img src={last.image} alt="srcimage here" />
            </Link>
          );
        })}
    </div>
  );
};
