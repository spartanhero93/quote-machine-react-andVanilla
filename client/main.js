let [quote, author, quoteBtn] = [
  document.querySelector("p"[0]),
  document.querySelector("em"),
  document.querySelector(".btn")
];

let quoteNum = 0;

const getNewQuote = () => {
  axios
  .get("/getQuote")
  .then(res => {
    info = res.data
    console.log(info)
    author.textContent = info[quoteNum].name
    quote.textContent = info[quoteNum].quote
    quoteNum > info.length ? (quoteNum = 0) : quoteNum++;
  })
  .catch(err => console.error(err));
};

quoteBtn.addEventListener("click", getNewQuote);