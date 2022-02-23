import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useParams } from "react-router";
import { Label3img } from "./Label3img";
import { Advertise } from "./Advertise";
import axios from "axios";

export const Bollywood = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          "https://hidden-water-5678.herokuapp.com/api/v1/dataTwo/category",{params:{category:category}}
        )
        .then((req, res) => {
          const response = req.data;
          setData(response);
          console.log("hii, data recieved here, Category");
        })
        .catch(() => console.log("error"));
    }
    fetchData();
  }, [category]);
  let count = 0;
  const [load, setLoad] = useState(true);
  const [ldbn, setlbdn] = useState("LOAD MORE");
  const [btn, setbtn] = useState("down");
  const loadbtn = () => {
    setLoad(!load); //seting toggle!!
    if (load) {
      setlbdn("LOAD LESS");
      setbtn("up");
    } else {
      setlbdn("LOAD MORE");
      setbtn("down");
    }
  };
  return (
    <>
      <h1 className="label2">{category}</h1>
      <hr className="hrstl3" />
      <div className="bodyc1">
        <div className="body1">
          <div className="label2parent">
            {data
              .map((x, index) => {
                if (x.id === 8) {
                  return (
                    <Link
                      to={`/${x.category}/${x.id}`}
                      className="link2"
                      key={index}
                    >
                      <div className="childl2">
                        <img
                          src={x.image}
                          height={"180px"}
                          alt="srcimage here"
                        />
                        <span className="textl2">
                          <h4>{x.title}</h4>
                          <p>{x.content.slice(0, 100)}</p>
                          <p>
                            <b>{x.category}</b> / {x.date}
                          </p>
                          <hr className="hrstl2" />
                        </span>
                      </div>
                    </Link>
                  );
                } else {
                  return (
                    <Link
                      to={`/${x.category}/${x.id}`}
                      className="link2"
                      key={index}
                    >
                      <div className="childl2">
                        <img src={x.image} alt="srcimage here" />
                        <span>
                          <h4>{x.title}</h4>
                          <p>{x.content.slice(0, 100)}</p>
                          <p>
                            <b>{x.category}</b> / {x.date}
                          </p>
                          <hr className="hrstl2" />
                        </span>
                      </div>
                    </Link>
                  );
                }
              })}
            <b onClick={loadbtn}>
              <i className={`fas fa-arrow-${btn}`} /> &nbsp; {ldbn}
            </b>
          </div>
          <Label3img />
        </div>
        <div>
          <div className="toppost">
            <h1>Top Post</h1>
            {data
              .map((e, index) => {
                if (e.id === 20) {
                  return (
                    <Link
                      to={`/${e.category}/${e.id}`}
                      className="link2"
                      key={index}
                    >
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
                    <Link
                      to={`/${e.category}/${e.id}`}
                      className="link2"
                      key={index}
                    >
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
          <Advertise />
        </div>
      </div>
    </>
  );
};
