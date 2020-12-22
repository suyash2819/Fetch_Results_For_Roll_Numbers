import React from "react";
import { useState } from "react";
import axios from "axios";
import "../CSS/home.css";
import Results from "./Results";
import Loader from "./Loader";

function Home() {
  const [rollNumbers, setRollNumbers] = useState("");
  const [results, setResults] = useState(null);
  const [loader, setLoader] = useState("");

  const getResults = (data) => {
    axios
      .post("https://fetch-results.herokuapp.com/", { data })
      .then((result) => {
        setResults(result);
        setLoader("unset");
      });
  };

  const dataFilter = () => {
    var filtereddata = rollNumbers.trim().split(",");
    return filtereddata;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = dataFilter();
    getResults(data);
    setLoader("set");
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
