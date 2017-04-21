import React, { Component } from 'react';

class Favoritas extends Component {

  constructor(props){
    super(props);
  }
  //Para la imagen se podría usar un alt
  render() {
          return (
      <div>
      <img src={this.props.url}/>
      </div>
    );
  }
}

export default Favoritas;
