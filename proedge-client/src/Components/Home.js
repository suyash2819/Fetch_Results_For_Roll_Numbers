import React from "react";
import { useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";

import axios from "axios";
import "../CSS/home.css";
import Results from "./Results";
import Loader from "./Loader";

function Home() {
  const [rollNumbers, setRollNumbers] = useState("");
  const [results, setResults] = useState(null);
  const [loader, setLoader] = useState("");

  let promises = [];

  const getResults = (rollnumber) => {
    promises.push(axios.post("http://localhost:9000/", { rollnumber }));
  };

  const dataFilter = () => {
    var filtereddata = rollNumbers.trim().split(",");
    return filtereddata;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = dataFilter();

    setLoader("set");
    data.forEach((rollnumber) => {
      getResults(parseInt(rollnumber));
    });

    Promise.all(promises).then((values) => {
      setResults(values);
      setLoader("unset");
    });
  };

  if (loader === "set") {
    return <Loader />;
  }

  if (results) return <Results result={results} />;

  return (
    <>
      <center>
        <h1>Get Your Results !</h1>
      </center>
      <div className="formdiv">
        <center>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              onChange={(e) => setRollNumbers(e.target.value)}
              placeholder="Enter roll numbers"
            />
            <br />
            <br />
            <input
              type="submit"
              value="Submit"
              style={{ display: "block" }}
              className="btn btn-info"
            />
          </form>
        </center>
      </div>
    </>
  );
}

export default Home;
