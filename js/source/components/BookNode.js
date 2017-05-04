import React from 'react';
import Book from './Book';

class BookNode extends React.Component {
    render() {
      var bookNodes = this.props.data.map(function(book,i){
      return (
        <Book data={book} key={i}></Book>
      );
    });

    return (
      <div className="bookList">
          {bookNodes}
      </div>
    );
  }
}

export default BookNode