import React from "react";
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

function StartButton({ startTest, btntext }) {
  return (
    <div className="Start-Button">
      <Button className="w-100" color="primary" onClick={startTest}>{btntext}</Button>
    </div>
  );
}

StartButton.propTypes = {
  startTest: PropTypes.func.isRequired,
  btntext: PropTypes.string.isRequired,
}

export default StartButton;
