import React from 'react';


class Book extends React.Component {
  render() {
     return (
       <div className="book">
          <li>
            <a href={this.props.data.volumeInfo.infoLink} target="_new">
              <img src={this.props.data.volumeInfo.imageLinks.thumbnail} />
            </a>
          </li>
       </div>
     );
  }
}

export default Book