import React from "react";
import { Table } from "react-bootstrap";
import "../CSS/results.css";

const Results = (props) => {
  const { result } = props;
  const data = result.data;
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
            {data.map((number) => {
              if (number.status === "rejected") {
                return (
                  <tr key={number.rollnumber}>
                    <td>{number.reason}</td>
                  </tr>
                );
              }
              return (
                <tr key={number.rollnumber}>
                  <td>{number.value.rollnumber}</td>
                  <td>{number.value.result}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </center>
    </>
  );
};

export default Results;
