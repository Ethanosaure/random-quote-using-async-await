export function fetch() {
  const fetch_quote = fetch("https://thatsthespir.it/api");
  fetch_quote()
    .then((fetch_quote) => fetch_quote.json())
    .then((json) => {
      const div = document.createElement("div");
      const quote = document.createElement("blockquote");
      quote.textContent = `${json.quote}`;
      quote.classList.add("quote");
      const total_quotes = document.createElement("span");
      total_quotes.textContent = `${json.total_quotes} quotes`;
      total_quotes.classList.add("total_quotes");
      const photo = document.createElement("img");
      photo.src = json.photo;
      photo.classList.add("photo");
      const author = document.createElement("span");
      author.textContent = `${json.author}`;
      author.classList.add("author");

      div.appendChild(quote);
      div.appendChild(photo);
      div.appendChild(author);
      div.appendChild(total_quotes);
      document.body.appendChild(div);
    })
    .catch((error) => {
      console.log("there was an error", error);
    });
}
