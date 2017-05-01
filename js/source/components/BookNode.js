import React from 'react';
import Book from './Book';

class BookNode extends React.Component {
    render() {
      var bookNodes = this.props.data.map(function(book){
      return (
        <Book data={book}></Book>
      );
    });

    return (
      <div className="bookList">
        <ul>
          {bookNodes}
        </ul>
      </div>
    );
  }
}

export default BookNode