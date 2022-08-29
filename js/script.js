/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 Create 'quotes' array holding quote objects
***/
const quotes = [
  {quote: 'There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.', source: 'Ernest Hemingway'},
  {quote: 'I was never afraid of failure; for I would sooner fail than not be among the greatest.', source: 'John Keats', tags: 'Failure'},
  {quote: 'The human heart...tells us that we are more alike than we are unalike.', source: 'Maya Angelou', citation: 'Letter to My Daughter' },
  {quote: 'Integrity  is doing the right thing, even when no one is watching.', source: 'C.S. Lewis'},
  {quote: 'You have to take risks. We will only understand the miracle of life fully when we allow the unexpected to happen.', source: 'Paulo Coelho', year: 1994}
];


/***
 Create `getRandomQuote` function to produce random quote from 'quotes' array
***/

function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

getRandomQuote();


/***
 Create `printQuote` function to display random quote and source on user screen.
 If object has a citation or year, that will display on screen in addition to quote and source.
***/

function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `
  <p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source}`; 
  
  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`
  };

  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`
  };

  if (randomQuote.tags) {
    html += `<span class="year">${randomQuote.tags}</span>`
  };

  html += `</p>
  `
  document.getElementById('quote-box').innerHTML = html; 
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);