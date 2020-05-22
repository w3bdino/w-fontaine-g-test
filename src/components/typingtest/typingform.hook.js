import React, { useState, useEffect } from 'react';

// convert Article to array
export const useProcessArticle = ({ wordsTyped, incrementWordsTyped, wordsList, processScores }) => {
  const [input, setInput] = useState("");
  const [wordToType, setWordToType] = useState(wordsList[wordsTyped]);
  const [wordsBefore, setWordsBefore] = useState("");
  const [wordsAfter, setWordsAfter] = useState("");

  useEffect(() => {
    if(!wordToType){
      // if the user has typed all words before time expires, process scores
      processScores();
    }
    if (input === wordToType) {
      // Word typed correctly! move to next word
      incrementWordsTyped();
      setInput("");
    }
  }, [input, wordToType, incrementWordsTyped, processScores]);

  useEffect(() => {
    if (wordsTyped === 0) {
      setInput("");
    }
    // Set current word to type based on user's progress
    setWordToType(wordsList[wordsTyped]);
    /* Combine list of words before current word to type into one string. */
    let wordsBefore = wordsList.slice(0, wordsTyped);
    wordsBefore = wordsBefore.join(" ");

    let wordsAfter = wordsList.slice(wordsTyped + 1);
    wordsAfter = wordsAfter.join(" ");

    setWordsBefore(wordsBefore);
    setWordsAfter(wordsAfter);
  }, [wordsTyped, wordsList]);
     
  return [{ input, wordToType, wordsBefore, wordsAfter }, setInput];
};


