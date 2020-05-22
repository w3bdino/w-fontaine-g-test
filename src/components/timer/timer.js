import React from 'react';
import { useTimer } from 'react-timer-hook';
import PropTypes from 'prop-types';
import { Card, CardBody, Row, Col } from "reactstrap";
import './timer.scss';

const Timer = ({ expiryTimestamp, getTimerStatus }) => {    
  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp, onExpire: () => getTimerStatus(false) });

  return (
    <Row>
      <Col md="12">
        <Card>
          <CardBody>     
            <div className="timerwrap">
            <span className="timertext">You have </span><span className="timer">{hours}:{minutes}:{seconds} </span><span className="timertext">to go !</span>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

Timer.propTypes = {
  expiryTimestamp: PropTypes.instanceOf(Date).isRequired,
  getTimerStatus: PropTypes.func,
}

export default Timer;