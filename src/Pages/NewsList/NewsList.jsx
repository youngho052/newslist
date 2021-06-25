import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { API } from "../../Config";

function NewsList() {
  const [newsList, setNewsList] = useState();

  useEffect(() => {
    axios.get(API).then((res) => setNewsList(res?.data.response.docs));
  }, []);

  console.log(newsList);
  return (
    <div>
      {newsList?.map((item, index) => {
        return (
          <a href={item.web_url}>
            <span style={{ display: "block" }}>
              {/* {item.abstract.length > 30
              ? item.abstract.slice(0, 30)
              : item.abstract} */}
              {item.abstract}
            </span>
          </a>
        );
      })}
    </div>
  );
}

export default NewsList;
