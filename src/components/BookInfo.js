import React from 'react'
import Shelves from './Shelves'

class BookInfo extends React.Component {
  render () {
    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }} />
          <div className='book-shelf-changer'>
            <select value={this.props.book.shelf}>
              <option value='move' disable='true'>Move to...</option>
              {
                Shelves.map(shelf => (
                  <option value={shelf.shelf} key={shelf.shelf}>{shelf.title}</option>
                ))
              }
            </select>
          </div>
        </div>
        <div className='book-title'>{this.props.book.title}</div>
        <div className='book-authors'>{this.props.book.authors}</div>
      </div>
    )
  }
}

export default BookInfo
