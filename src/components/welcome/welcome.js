import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import StartButton from "../ui/button";
import "./welcome.scss";

function Welcome({ startTest }) {
  return (
    <div className="welcome">
      <Row>
        <Col md="12">
          <Card>
            <CardBody>       
            <div className="welcomewrap">
              <h1 className="header">Welcome to Typing Racer Game !</h1>
              <hr></hr>
              <h3>Rules:</h3>
              <ul className="list">
                <li>Type as many words as you can for 60 seconds</li>
                <li>No need to enter spaces between each word</li>
                <li>Punctuation and letter casing must match</li>
              </ul>
              <StartButton startTest={startTest} btntext="Start Game !" />   
            </div> 
              </CardBody>
          </Card>
        </Col>
      </Row>              
    </div>
  );
}

export default Welcome;
