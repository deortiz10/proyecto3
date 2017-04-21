import React, { Component } from 'react';

class Image extends Component {

  constructor(props){
    super(props);
    this.state={
    };
  }

  selected(){
      //Se podría usar var o let
      var producto = this.props.producto;
      console.log(producto);
      this.props.callFather(producto);
  }

  render() {
      if(this.props.producto){
          return (
              <div>
                  <p> {this.props.producto.name} </p>
                  <input type="image" src={this.props.producto.thumbnailImage} onClick={()=> this.selected()}/>
              </div>
          );
      }else {
          return (
              <div>
                  <p> No hay nada </p>
              </div>
          );
      }


  }
}

export default Image;
