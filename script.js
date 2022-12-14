import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const quoteList = [
{ text: `“And how can man die better
Than facing fearful odds,
For the ashes of his fathers,
And the temples of his Gods.”`, author: "Thomas Babington Macaulay" },
{ text: `“The purpose of a writer is to keep civilization from destroying itself.”`, author: "Albert Camus" },
{ text: `“I am fond of pigs. Dogs look up to us. Cats look down on us. Pigs treat us as equals.”`, author: "Winston Churchill" },
{ text: `“Once the rockets are up, who cares where they come down?”`, author: "Tom Hehrer" },
{ text: `“Those who cannot remember the past are condemned to repeat it.”`, author: "George Santayana" },
{ text: `“Happiness: a good bank account, a good cook and a good digestion.”`, author: "Jean Jacques Rousseau" },
{ text: `“If the brean were so simple we could understand it, we would be so simple we couldn't.”`, author: "Lyall Watson" }];


const QuoteBox = ({ quote, handleNewQuote }) => /*#__PURE__*/
React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
React.createElement("p", { id: "text" }, quote.text), /*#__PURE__*/
React.createElement("h2", { id: "author" }, quote.author), /*#__PURE__*/
React.createElement("div", { class: "actions" }, /*#__PURE__*/
React.createElement("button", {
  id: "new-quote",
  class: "button",
  onClick: handleNewQuote }, "New Quote"), /*#__PURE__*/



React.createElement("a", {
  href: "https://twitter.com/intent/tweet",
  id: "tweet-quote",
  target: "_blank" }, "Tweet")));







const getRandomIndex = (max) =>
Math.round(Math.random() * (quoteList.length - 1 - 0) + 0);

const App = () => {
  const [quote, setQuote] = React.useState(quoteList[getRandomIndex()]);

  const handleNewQuote = () => {
    setQuote(quoteList[getRandomIndex()]);
  };

  return /*#__PURE__*/(
    React.createElement("div", { class: "main" }, /*#__PURE__*/
    React.createElement(QuoteBox, { handleNewQuote: handleNewQuote, quote: quote })));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#app"));