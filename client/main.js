// //<=== CORS proxy and URL ===>//

// const [proxyUrl, URL] = [
//   `https://cors-anywhere.herokuapp.com/`,
//   `http://quotes.rest/quote/random.json`
// ];

let [quote, author, quoteBtn] = [
  document.querySelector("p"[0]),
  document.querySelector("em"),
  document.querySelector(".btn")
];

const getNewQuote = () => {
  axios
  .get("/getQuote")
  .then(res => {
    info = res.data
    console.log(info)
    
    // author.textContent = info.title
    // quote.innerHTML = info.content
  })
  .catch(err => console.error(err));
};

quoteBtn.addEventListener("click", getNewQuote);