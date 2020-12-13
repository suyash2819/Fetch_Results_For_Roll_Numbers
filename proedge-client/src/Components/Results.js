import React from "react";
import { Table } from "react-bootstrap";
import "../CSS/results.css";

const Results = (props) => {
  const { result } = props;
  console.log(result);
  return (
    <>
      <center>
        <h1>Results</h1>
      </center>
      <center>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Roll Number</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {result.map((number) => (
              <tr key={number.data.rollnumber}>
                <td>{number.data.rollnumber}</td>
                <td>{number.data.result}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </center>
    </>
  );
};

export default Results;
