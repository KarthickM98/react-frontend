import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contextData } from "./Context";

export const Label3img = () => {
  const [data] = useContext(contextData);
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
