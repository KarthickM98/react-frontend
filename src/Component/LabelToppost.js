import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contextData } from "./Context";

export const LabelToppost = () => {
  const [data] = useContext(contextData)
  let count = 0;
  return (
    <div className="toppost">
      <h1>Top Post</h1>
      {data
        .filter((x) =>
         x.id >= 19 && x.id < 24
        )
        .map((e, index) => {
          if (e.id === 20) {
            return (
              <Link to={`/${e.category}/${e.id}`} className="link2" key={index}>
                <div className="toppost1">
                  <img src={e.image} alt="srcimage here" className="toppostimg"/>
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
