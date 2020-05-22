import React from "react";
import PropTypes, { string } from 'prop-types';
import reactStringReplace from 'react-string-replace';
import { useProcessArticle } from './typingform.hook';
import { Card, CardBody, Form, Input, Row, Col } from "reactstrap";
import './typingform.scss';

function TypingRacerForm({ wordsTyped, incrementWordsTyped, wordsList, processScores }) {

  const [data, setInput] = useProcessArticle({ wordsTyped, incrementWordsTyped, wordsList, processScores }); 
  const { input, wordToType, wordsBefore, wordsAfter } = data;

  const handleChange = (e) => {
    const { target } = e
    setInput(target.value);
  }

  const CharacterToType = reactStringReplace(wordToType, input, (match, i, key) => {
    return (key === 0) ? <span key={key} style={{ color: 'red' }} className={`currentchar`}>{match}</span> : match
    }
  );

  return (
    <div className="typingform">
      <Row>
        <Col md="12">
          <Card>
            <CardBody>     
              <h3 className="words-container">
                <span className="words-before">{wordsBefore}</span>{" "}
                <span className="word-to-type">{CharacterToType}</span>{" "}
                <span className="words-after">{wordsAfter}</span>
              </h3>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <Card>
            <CardBody>       
              <Form onSubmit={e => e.preventDefault()}>
                <Input
                  type="text"
                  value={input}
                  onChange={handleChange}
                  autoFocus
                ></Input>
              </Form>
              </CardBody>
          </Card>
        </Col>
      </Row>              
    </div>
  );
}

TypingRacerForm.propTypes = {
  wordsTyped: PropTypes.number,
  incrementWordsTyped: PropTypes.func,
  wordsList: PropTypes.arrayOf(string),
  processScores: PropTypes.func,
}

export default TypingRacerForm;
