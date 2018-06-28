import React from 'react'
import Shelves from './Shelves'
import BookInfo from './BookInfo'

class BookList extends React.Component {
  render () {
    return (
      <div>
        {
          Shelves.map(shelf => (
            (shelf.shelf !== 'none') && (
              <div className='bookshelf' key={shelf.title}>
                <h2 className='bookshelf-title'>{shelf.title}</h2>
                <div className='bookshelf-books'>
                  <ol className='books-grid'>
                    <BookInfo
                      books={this.props.books.filter(book => book.shelf === shelf.shelf)}
                      updateBook={this.props.updateBook}
                    />
                  </ol>
                </div>
              </div>
            )
          )
          )}
      </div>
    )
  }
}

export default BookList
