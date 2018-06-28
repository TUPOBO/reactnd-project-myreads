import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import BookInfo from './BookInfo'

class ShowSearchPage extends React.Component {
  state = {
    books: [],
    query: ''
  }
  updateQuery = (query) => {
    this.setState({ query }, this.searchBooks(query))
    console.log(query)
  }

  searchBooks = (query) => {
    if(query === '') {
      this.setState({ books: []})
    } else {
      BooksAPI.search(query.trim()).then( books => {
      if(books&& books.length) {
        this.setState({ books })
      }
    })
    }
    
    console.log(this.state.books)
  }
  render () {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/' className='close-search' >Close</Link>
          <div className='search-books-input-wrapper'>
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type='text' placeholder='Search by title or author' 
            value={this.state.query}
            onChange={event =>this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className='search-books-results'>
        
          <ol className='books-grid'>
            <BookInfo 
            books = {this.state.books}
            updateBook = {this.props.updateBook} />
          </ol>
        </div>
      </div>
     
    )
  }
}

export default ShowSearchPage
