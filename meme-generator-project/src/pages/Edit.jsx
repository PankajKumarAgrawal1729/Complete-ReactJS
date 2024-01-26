import { Button } from "react-bootstrap";
import React, { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";
import {exportComponentAsJPEG} from "react-component-export-image";

const EditPage = () => {
  const [params] = useSearchParams();
  const url = params.get("url");
  const [count, setCount] = useState(0);
  const memeRef = createRef();

  const addText = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center", gap:"1rem",  margin: "0 auto"}}>
      <div style={{width: "408px", height:"408px", border:"4px solid"}} ref={memeRef} className="mt-5">
        <img src={url} alt="meme" width="400px" height="400px" />
        {Array(count)
          .fill(0)
          .map(e => 
            <Text />
          )}
      </div>
      <Button onClick={addText}>Add Text</Button>
      <Button variant="success" onClick={e => {exportComponentAsJPEG(memeRef)}}>Save</Button>
    </div>
  );
};

export default EditPage;
