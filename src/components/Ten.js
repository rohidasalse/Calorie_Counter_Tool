import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Ten() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        res.json();
      })
      .then((p) => {
        console.log("hi");
        setData(p);
        console.log(setData);
      });
  }, []);

  return (
    <>
      <div>
        {data.map((ele) => {
          <h1>{ele.id}</h1>;
        })}
      </div>
    </>
  );
}
