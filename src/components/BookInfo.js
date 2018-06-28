import React from 'react'
import Shelves from './Shelves'

class BookInfo extends React.Component {
  render () {
    return (
      <div className='books-grid'>
        {
          this.props.books.map(book => (
            <div className='book' key={book.title}>
              <div className='book-top'>
                <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }} />
                <div className='book-shelf-changer'>
                  <select value={book.shelf} onChange={(e) => this.props.updateBook(book, e.target.value)}>
                    <option value='move' disable='true'>Move to...</option>
                    {
                      Shelves.map(shelf => (
                        <option value={shelf.shelf} key={shelf.shelf}>{shelf.title}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div className='book-title'>{book.title}</div>
              <div className='book-authors'>{book.authors}</div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default BookInfo
