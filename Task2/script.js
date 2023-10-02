const quotesContainer = document.getElementById("quote-container");
const displayQuoteBtn = document.getElementById("display-quote");

// Create Quote html element and add it to the container
const addQuoteToContainer = ({ content, author }) => {
  const quoteElement = `<div class="quote-card">
    <p>${content}</p>
    <div class="author-name">${author}</div>
  </div>`;
  quotesContainer.insertAdjacentHTML("beforeend", quoteElement);
};

// Fetch n quotes from api
const fetchQuotes = async (totalQuotes) => {
  try {
    const responses = await Promise.all(
      Array(totalQuotes)
        .fill(1)
        .map(() => fetch("https://api.quotable.io/random"))
    );
    return await Promise.all(responses.map((response) => response.json()));
  } catch (e) {
    console.debug("Failed to fetch quotes");
  }
  return [];
};

displayQuoteBtn.addEventListener("click", async () => {
  const quotes = await fetchQuotes(3);
  // reset container before adding quotes
  quotesContainer.innerHTML = "";
  quotes.forEach(addQuoteToContainer);
});
