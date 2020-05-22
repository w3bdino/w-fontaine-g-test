import React, { useState, useEffect, useRef } from 'react';


export const useGenerateArticle = (initialtime, type) => {
  const [testActive, setTestActive] = useState(false);    
  const [time, setTime] = useState(0);
  const [wordsList, setWordsList] = useState([]);
  const [wordsTyped, setWordsTyped] = useState(0);
  const [isLoading, setTestLoading] = useState(false);
  const [error, setError] = useState(null);


  const startTest = async () => {
    const settime = new Date();
    settime.setSeconds(settime.getSeconds() + initialtime); 
    setTestLoading(true);
    try {
      const res = await fetch(`https://baconipsum.com/api/?type=${type}&paras=1`);
      const json = await res.json();

      let wordsListToSet = [];
      // Split string into list of words
      for (let sentence in json) {
        wordsListToSet.push(json[sentence].split(" "));
      }
      wordsListToSet = [].concat.apply([], wordsListToSet);
      wordsListToSet = wordsListToSet.filter(word => {
        return word !== "";
      });
      
      setTestActive(true);
      setWordsList(wordsListToSet);
      setTime(settime);
      setWordsTyped(0);
      setTestLoading(false);

    } catch (error) {
      setError(error);
      setTestLoading(false)
    }
  };
     
  return [
    { testActive, wordsList, wordsTyped, isLoading, time, error }, 
    setTestActive, 
    setWordsTyped, 
    startTest,
  ];
};


export const useEffectAfterMount = (cb, deps) => {
  const componentJustMounted = useRef(true)
    useEffect(() => {
      if (!componentJustMounted.current) {
        return cb()
      }
      componentJustMounted.current = false
  }, deps)
}
