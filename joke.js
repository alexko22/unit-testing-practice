// simulate async API call...
function fetchJoke() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        setup: "Why don’t programmers like nature?",
        punchline: "Too many bugs."
      });
    }, 500);
  });
}

// function using async/await...
async function getFormattedJoke() {
  const joke = await fetchJoke();
  return `${joke.setup} - ${joke.punchline}`;
}

module.exports = { fetchJoke, getFormattedJoke };