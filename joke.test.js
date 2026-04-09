const { fetchJoke, getFormattedJoke } = require('./joke');

test("fetchJoke returns a joke object", async () => {
  const joke = await fetchJoke();
  expect(joke).toHaveProperty("setup");
  expect(joke).toHaveProperty("punchline");
});

test("getFormattedJoke returns a string", async () => {
  const result = await getFormattedJoke();
  expect(typeof result).toBe("string");
});

test("formatted joke contains dash", async () => {
  const result = await getFormattedJoke();
  expect(result).toContain(" AHAHA ");
});