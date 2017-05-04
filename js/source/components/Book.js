import React from 'react';


class Book extends React.Component {
  render() {

     return (
       <div className="book">
            <a href={this.props.data.volumeInfo.infoLink} target="_new">
              <img src={this.props.data.volumeInfo.imageLinks.thumbnail} />
            </a>
       </div>
     );
  }
}

export default Book