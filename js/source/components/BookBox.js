import React from 'react';
import BookNode from './BookNode';
import request from 'superagent'

class BookBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data:[],
      needle:'react'
    };

    this._search = this._search.bind(this);
    this.loadAjax = this.loadAjax.bind(this);
  }

  _search(e){
    this.setState({needle: e.target.value.toLowerCase()});
    this.loadAjax(this.state.needle);
  }
  
  loadAjax(needle) {
    const url = 'https://www.googleapis.com/books/v1/volumes?&q=';
    request
      .get(url + this.state.needle)
      .set('Content-Type', 'application/json')
      .end((err, data) => {
        if (err) {
          console.log('error')
        }
        this.setState({
          data: data.body.items
        })
      })
   }

  render() {
    return (
      <div>
        <input placeholder="検索" onChange={this._search} defaultValue={this.state.needle} />
        <BookNode data={this.state.data} />
      </div>
    );
  }
}

export default BookBox