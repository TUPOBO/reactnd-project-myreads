import React from 'react'
// import * as BooksAPI from './BooksAPI'
import {Route ,Link} from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Header from './components/Header'
import ShowSearchPage from './components/ShowSearchPage';
import BookList from './components/BookList'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  getBooks () {
    BooksAPI.getAll().then((books) => (
      this.setState({ books })
    ))
  }

  componentDidMount () {
    this.getBooks()
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(res => this.getBooks())
  }

  render() {
    return (
      <div className="app">
        <Route path="/ShowSearchPage" render={() => (
          <ShowSearchPage 
          updateBook={this.updateBook}/>
        )} />
        <Route exact path="/" render={() => (
          <div className="list-books">
            <Header />
          <div className="list-books-content">
            <BookList
             books={this.state.books} 
             updateBook={this.updateBook}  
            />
          </div>
          <div className="open-search">
            <Link to="/ShowSearchPage">Add a book</Link>
          </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
