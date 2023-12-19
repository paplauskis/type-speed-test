import shortSentences from '../utils/sentences/short-sentences.js'
import mediumSentences from '../utils/sentences/medium-sentences.js'
import longSentences from '../utils/sentences/long-sentences.js'

function DisplaySentence({ choice }) {
  const randomNum = Math.floor(Math.random() * 40)
  let sentence
  console.log(choice)
  if (choice === 's') {
    sentence = shortSentences[randomNum]
  } else if (choice === 'm') {
    sentence = mediumSentences[randomNum]
  } else {
    sentence = longSentences[randomNum]
  }

  return <h2>{sentence}</h2>
}

export default DisplaySentence
