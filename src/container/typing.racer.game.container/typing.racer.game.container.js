import React, { useState } from "react";
import "./typing.racer.game.scss";
import TypingRacerForm from "../../components/typingtest/typingform";
import Spinner from "../../components/spinner/spinner";
import Results from "../../components/results/result";
import Welcome from "../../components/welcome/welcome";
import { useGenerateArticle, useEffectAfterMount } from "./typing.racer.game.hooks";
import  Timer from '../../components/timer/timer';

function TypingRacerGameContainer() {
  const INITIALTIME = 20; // set time in SECONDS
  const [timerstatus, setTimerStatus] = useState(true);
  const [pctResult, setCompletionPct] = useState();
  const [allResults, setResults] = useState([]);
  const [hookData, setTestActive, setWordsTyped, startTest] = useGenerateArticle(INITIALTIME, "Meat"); // time , type
  const {testActive, wordsList, wordsTyped, isLoading, time, error} = hookData;

  const incrementWordsTyped = () => {
    setWordsTyped(wordsTyped + 1);
  }

  const processScores = () => {
    // Time has expired ... process results
    setTestActive(false);
    let letpctResult = ((wordsTyped / wordsList.length) * 100).toFixed(2);
    setCompletionPct(letpctResult);
    setResults(prevState => [...prevState, { percentage: letpctResult, wpm: wordsTyped, datetime: new Date() }]);
  }

  useEffectAfterMount(() => {
    if(!timerstatus){
      processScores();
    }
    setTimerStatus(true)
  }, [timerstatus]);  

  if(isLoading) { return <Spinner /> }

  if (testActive) {
    return (
      <div className="wpmgame">
        <Timer expiryTimestamp={time} getTimerStatus={setTimerStatus} />
        <TypingRacerForm
          wordsList={wordsList}
          wordsTyped={wordsTyped}
          incrementWordsTyped={incrementWordsTyped}
          processScores={processScores}
        />
      </div>
    );
  }

  if(allResults.length > 0){ 
      return <Results 
      wordsTyped={wordsTyped} 
      pctResult={pctResult} 
      startTest={startTest} 
      allResults={allResults}
    />
  }

  if(allResults.length === 0){ 
    return <Welcome startTest={startTest} />
  }  

}

export default TypingRacerGameContainer;
