import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./blogStyles.css";
import axios from "axios";

export const TopFeaterudArts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://hidden-water-5678.herokuapp.com/api/v1/data3/homed")
        .then((req, res) => {
          const response = req.data;
          setData(response);
          console.log("hii, data recieved here, label topad");
        })
        .catch(() => console.log("error"));
    }
    fetchData();
  }, []);
  const data1 = [];
  const data2 = [];
  data.forEach((k) => {
    switch (k.id) {
      case "1":
        data1.push(data[k.id - 1]);
        break;
      case "2":
        data2.push(data[k.id - 1]);
        break;
      case "3":
        data2.push(data[k.id - 1]);
        break;
      default:
        break;
    }
  });
  return (
    <div className="parentTfa">
      {data1.map((a, index) => (
        <Link to={`/${a.category}/${a.id}`} key={index}>
          <div className="Topfetrd">
            <img src={a.image} alt="srcimage here" />
            <p>
              <b>{a.title}</b>
              <br />
              {a.category} / {a.date}
            </p>
          </div>
        </Link>
      ))}
      <div className="sidePnt">
        {data2.map((a, index) => (
          <Link to={`/${a.category}/${a.id}`} key={index}>
            <div className="sideBox">
              <img src={a.image} alt="srcimage here" />
              <p>
                <b>{a.title}</b>
                <br />
                {a.category} / {a.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
