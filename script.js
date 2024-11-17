const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const twitterBtn = document.getElementById("twitter");
const loader = document.getElementById("loader");

// Event Listeners
newQuoteBtn.addEventListener("click", getNewQuote);
twitterBtn.addEventListener("click", tweetQuote);

let apiQuotes = [];

function showLoading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function hideLoading() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

function toggleLoading(toggle) {
  loader.hidden = !toggle;
  quoteContainer.hidden = toggle;
}

function showQuote(item) {
  const { quote, author } = item[0];

  if (quote.length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.textContent = quote;
  quoteAuthor.textContent = author;
}

// Get quotes from API
async function getNewQuote() {
  const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=";

  try {
    toggleLoading(true);
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "X-Api-Key": "MJsrAOmLT3ANgb0IObBkBA==9UN7fNbIE8q4qfsH",
      },
      contentType: "application/json",
    });
    quote = await response.json();
    showQuote(quote);
    toggleLoading(false);
  } catch (error) {}
}

// Tweet QUote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
  window.open(twitterUrl, "_blank");
}

// onLoad js script ausführen
getNewQuote();
