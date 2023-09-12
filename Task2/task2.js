
async function fetchRandomQuote() {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex];
      const quoteContainer = document.querySelector('.quote');
      quoteContainer.innerHTML = `
        <p>${randomQuote.text}</p>
        <p class="author">${randomQuote.author || 'Unknown'}</p>
      `;
    } catch (error) {
      console.error('Error fetching random quote:', error.message);
      const quoteContainer = document.querySelector('.quote');
      quoteContainer.innerHTML = 'Failed to fetch a random quote.';
    }
  }
  const newQuoteButton = document.getElementById('new-quote-btn');
  newQuoteButton.addEventListener('click', fetchRandomQuote);
  fetchRandomQuote();
  