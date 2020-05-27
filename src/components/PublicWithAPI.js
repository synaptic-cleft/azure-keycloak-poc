import React, { useEffect, useState } from 'react';
import axios from "axios";

function PublicWithAPI() {
  const [text, setText] = useState("empty");

  useEffect(() => {
    axios
      .get(`http://20.50.156.239:8080/api`)
      .then(res => setText(res.data))
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Public">
      <p>Public route</p>
      <p>{text}</p>
    </div>
  );
}

export default PublicWithAPI;