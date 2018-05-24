let [quotes, author, quoteBtn, JSquoteBtn] = [
  document.querySelectorAll('p'),
  document.querySelector('em'),
  document.querySelector('.btn')
]

console.log(quotes.length)

let quoteNum = 0

const getNewQuote = () => {
  axios
    .get('/getQuote')
    .then(res => {
      info = res.data
      console.log(info)
      author.textContent = info[quoteNum].name
      quotes[0].textContent = info[quoteNum].quote
      quoteNum > info.length ? (quoteNum = 0) : quoteNum++
    })
    .catch(err => console.error(err))
}

quoteBtn.addEventListener('click', getNewQuote)
