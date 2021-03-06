import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const contextData = createContext(); //api // context value creating

export const Context = (props) => {
  //data
  const [data, setData] = useState([]);
  const [load,setLoad] = useState(false)
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://hidden-water-5678.herokuapp.com/api/v1/data3/homedata")
        .then((req, res) => {
          const response = req.data;
          setData(response);
          setLoad(true);
          console.log("hii, data recieved here, Context");
        })
        .catch(() => console.log("error"));
    }
    fetchData();
  }, []);
  return (
    <contextData.Provider value={[data,load]}>
      {props.children}
    </contextData.Provider>
  );
};
