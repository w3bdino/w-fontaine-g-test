import React from "react";
import "./typing.racer.game.scss";
import Footer from "../../components/footer/footer";
import TypingRacerGameContainer from '../../container/typing.racer.game.container/typing.racer.game.container'
import { Container, Card, CardBody, CardText, Row, Col } from "reactstrap";

const TypingRacerGamePage = () => {
  return (
    <Container className="TypingRacerGamePage">
        <div className="content">
          <Row>
            <Col md="12">
              <TypingRacerGameContainer />
            </Col>
          </Row>
        </div>      
        <Footer />
    </Container>
  )
}

export default TypingRacerGamePage;
