import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export const LabelToppost = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://hidden-water-5678.herokuapp.com/api/v1/data3/homed")
        .then((req, res) => {
          const response = req.data;
          setData(response);
          console.log("hii, data recieved here, label toppost");
        })
        .catch(() => console.log("error"));
    }
    fetchData();
  }, []);
  let count = 0;
  return (
    <div className="toppost">
      <h1>Top Post</h1>
      {data
        .filter((x) =>
          category === undefined
            ? x.id >= 19 && x.id < 25
            : x.category === category
        )
        .map((e, index) => {
          if (e.id === 20) {
            return (
              <Link to={`/${e.category}/${e.id}`} className="link2" key={index}>
                <div className="toppost1">
                  <img src={e.image} alt="srcimage here" />
                  <h5>{e.title.slice(0, 32)} </h5>
                  <span className="numspan">{`${(count = count + 1)}`}</span>
                  <p>
                    <b>{e.category}</b> / {e.date}
                  </p>
                </div>
                <hr className="hrstl4" />
              </Link>
            );
          } else {
            return (
              <Link to={`/${e.category}/${e.id}`} className="link2" key={index}>
                <div className="toppost2">
                  <img src={e.image} alt="srcimage here" />
                  <h5>{e.title.slice(0, 32)}</h5>
                  <span className="numspan2">{`${(count = count + 1)}`}</span>
                  <p>
                    <b>{e.category}</b> / {e.date}
                  </p>
                </div>
                <hr className="hrstl4" />
              </Link>
            );
          }
        })}
    </div>
  );
};
