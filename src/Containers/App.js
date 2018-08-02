import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

class App extends Component {
  state = {
    data: [],
    quote: {
      quote: 'Click Below for a random quote',
      author: 'Luis Lopez'
    }
  }

  componentDidMount () {
    axios
      .get(
        `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
      )
      .then(res => {
        this.setState({ data: res.data.quotes })
      })
  }

  fetchQuote = () => {
    const maxNum = this.state.data.length - 1
    const randomNum = Math.floor(Math.random() * maxNum)

    this.setState({
      quote: this.state.data[randomNum]
    })
  }

  render () {
    console.log(this.state.quote)
    return (
      <Wrapper>
        <Container>
          <Title>Random Quote Machine</Title>

          <QuoteBox>

            <QuoteHere>
              <h2>{this.state.quote.quote}</h2>
            </QuoteHere>
            <AuthorHere> - {this.state.quote.author}</AuthorHere>
          </QuoteBox>

          <div style={{ textAlign: 'center' }}>
            <Button onClick={this.fetchQuote}> Random Quote</Button>
          </div>

        </Container>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #247291;
  color: white;
`
const Container = styled.div`
  margin: 0rem 8rem;
`
const Title = styled.h1`
  color: white;
  text-align: center;
  font-family: 'Fredoka One', cursive;
  text-shadow: 2px 2px 5px #000;
  padding: 2rem;
  font-size: 4rem;
`
const QuoteBox = styled.div`
  background-color: rgba(0,0,0,0.25);
  width: 75%;
  margin: 50px auto;
  border-radius: 25px;
  padding: 25px;
  box-shadow: 3px 3px 5px black;
  font-family: 'Lato', sans-serif;
  text-align: center;
`
const QuoteHere = styled.div`

`
const AuthorHere = styled.div`

`
const Button = styled.button`

`
export default App
