import React from "react";
import MemeCard from "../components/Card";
import { useEffect, useState} from 'react';
import { getAllMemes } from "../api/memes";

const Homepage = () => {
    const [memes, setMemes] = useState([]);

  useEffect(() => {
    getAllMemes().then((memes) => setMemes(memes.data.memes));
  }, [])
  return (
    <div className="row">
      {
        memes.map(el => <MemeCard image={el.url} title={el.name}/>)
      }
    </div>
  );
};

export default Homepage;
