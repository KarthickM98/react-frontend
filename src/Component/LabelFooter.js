import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const LabelFooter = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://hidden-water-5678.herokuapp.com/api/v1/data3/homed")
        .then((req, res) => {
          const response = req.data;
          setData(response);
          console.log("hii, data recieved here, label footr");
        })
        .catch(() => console.log("error"));
    }
    fetchData();
  }, []);
  const [ldbn, setldbn] = useState(true);
  const [btn, setbtn] = useState("down");
  const [btn2, setbtn2] = useState("LOAD MORE");
  const [num, setnum] = useState(27);
  const loadfn = () => {
    setldbn(!ldbn);
    if (ldbn) {
      setnum(30);
      setbtn("up");
      setbtn2("LOAD LESS");
    } else {
      setnum(27);
      setbtn("down");
      setbtn2("LOAD MORE");
    }
  };
  return (
    <div className="labelft">
      <h1 className="hrft">Latest Stories</h1>
      <div className="footlabel">
        {data
          .filter((x) => x.id > 23 && x.id < num)
          .map((x, index) => {
            return (
              <Link to={`/${x.category}/${x.id}`} className="link2" key={index}>
                <div className="childft">
                  <h4>{x.title}</h4>
                  <p>{x.content.slice(0, 150)}</p>
                  <p>
                    <b>{x.category}</b> / {x.date}
                  </p>
                </div>
              </Link>
            );
          })}
      </div>
      <b onClick={loadfn}>
        <i className={`fas fa-arrow-${btn}`} />
        &nbsp; {btn2}
      </b>
    </div>
  );
};
