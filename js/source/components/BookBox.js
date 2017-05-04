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
    this.handleChange = this.handleChange.bind(this);
    this.loadAjax = this.loadAjax.bind(this);
  }

  _search(e){
    const ENTER = 13;
    if(e.keyCode == ENTER){
      if(this.state.needle == ""){
        this.loadAjax("react");
      } else {
        this.loadAjax(this.state.needle);
      }
    }
  }

  handleChange(ev){
    this.setState({needle: ev.target.value});
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
        <input placeholder="検索" onKeyDown={this._search} onChange={this.handleChange} />
        <BookNode data={this.state.data} />
      </div>
    );
  }
}

export default BookBox