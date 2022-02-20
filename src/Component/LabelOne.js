import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const LabelOne = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://hidden-water-5678.herokuapp.com/api/v1/data3/homed")
        .then((req, res) => {
          const response = req.data;
          setData(response);
          console.log("hii, data recieved here, label one");
        })
        .catch(() => console.log("error"));
    }
    fetchData();
  }, []);
  return (
    <>
      <h1 className="headh1">The Latest</h1>
      <div className="lathead">
        {data
          .filter((x) => x.id > 3 && x.id < 7)
          .map((e, index) => {
            return (
              <Link to={`/${e.category}/${e.id}`} className="link2" key={index}>
                <div className="latest">
                  <img src={e.image} alt="srcimage here" />
                  <h1>{e.title.slice(0, 32)}</h1>
                  <p>{e.content.slice(0, 120)}</p>
                  <p>
                    <b>{e.category}</b> / {e.date}
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};
