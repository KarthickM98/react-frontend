import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ShowFooter, ShowUser } from "./ShowHeader";
import axios from "axios";

export const ShowContent = () => {
  const { show ,id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`https://hidden-water-5678.herokuapp.com/api/v1/dataOne/${id}`)
        .then((req, res) => {
          const response = req.data;
          setData(response);
          console.log("hii, data recieved here, showcontent");
        })
        .catch(() => console.log("error"));
    }
    fetchData();
  }, [id]); // however id changed on the route only no need for id in dependency
  // const [dt,setdt] =useState(); // do not use usestate hooks inside the loops forEach
  let dt1 = data;
  data.forEach((element) => {
    if (element.id === id) {
      dt1 = element;
    }
  });
  return (
    <>
      <div className="contentPage">
        <h1>{show} Article</h1>
        <span className="clapsicon">
          <i className="fa-solid fa-hands-clapping fa-2x" /> {dt1.claps}!!{" "}
          <i className="fa fa-share-alt fa-2x" /> Share
        </span>
        <span className="socil">
          <i className="fab fa-youtube fa-2x" /> <i class="fab fa-facebook fa-2x" />{" "}
          <i className="fab fa-instagram fa-2x" />{" "}
          <i className="fab fa-twitter fa-2x" />
        </span>
        <ShowUser data1={dt1.date} name={dt1.author}/>

        <img src={dt1.image} alt="srcimage here" />
        <p>{dt1.content}</p>
        <p>{dt1.content}</p>
        <img src={dt1.image} alt="srcimage here" />
        <p>{dt1.content}</p>
        <span className="contentspan">
          <i className="fa-solid fa-hands-clapping fa-2x" /> &nbsp;{dt1.claps}!!
          <br />
          <li>React</li>
          <li>Javascript</li>
          <li>Animation</li>
        </span>
        <b>Written by</b>
        <ShowUser data1={dt1.date} name={dt1.author}/>
      </div>
      <ShowFooter data1={dt1.date} />
    </>
  );
};
