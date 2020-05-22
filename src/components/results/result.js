import React from "react";
import PropTypes from 'prop-types';
import StartButton from "../ui/button";
import { Card, CardHeader, CardBody, Table, Row, Col } from "reactstrap";
import './result.scss';

const Results = ({ wordsTyped, pctResult, startTest, allResults }) => {

  const renderResultsData = () => {
    return allResults.reverse().map((val, index) => {
       const { percentage, wpm, datetime } = val //destructuring
       return (
          <tr key={index}>
             <td>{wpm}</td>
             <td>{percentage}%</td>
             <td>{datetime.toLocaleString()}</td>
          </tr>
       )
    })
  }  

  return (
    <div className="resultwrap">
    <Row>
      <Col md="6">
        <Card>
          <CardBody>       
            <h2>Your test result</h2>
            <hr></hr>
            <div className="resulttext">Your current typing speed is {wordsTyped} WPM</div>
            <div className="resulttext">Completion percentage is {pctResult} %</div>
            <StartButton startTest={startTest} btntext="Try Again !" />   
          </CardBody>
        </Card>
      </Col>
      <Col md="6">
        <Card>
          <CardHeader>
            <h2>Previous results</h2>
            <hr></hr>
          </CardHeader>
          <CardBody>
            <Table className="tablesorter" responsive>
              <thead className="text-primary">
                <tr>
                  <th>WPM</th>
                  <th>Percentage</th>
                  <th>Date Time</th>
                </tr>
              </thead>
                <tbody>
                {renderResultsData()}
              </tbody>
            </Table>
          </CardBody>
          </Card>
        </Col>      
    </Row>  
    </div>      
  )
}

Results.propTypes = {
  wordsTyped: PropTypes.number,
  pctResult:  PropTypes.string,
  startTest: PropTypes.func,
  allResults: PropTypes.arrayOf(Object)
}

export default Results;
