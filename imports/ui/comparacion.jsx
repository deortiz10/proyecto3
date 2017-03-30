import React, {Component, PropTypes} from 'react';

export default class Comparacion extends Component
{
  render()
  {
  return (
  <li><span className="text">
          <strong>{this.props.comparacion.username}</strong>:
      {this.props.comparacion.name1}
      {this.props.comparacion.des1}
      {this.props.comparacion.price1}
     <strong> VS</strong>
      {this.props.comparacion.name2}
      {this.props.comparacion.des2}
      {this.props.comparacion.price2}


        </span>}</li>
  );
  }
}

Comparacion.propTypes= {

comparacion: PropTypes.object.isRequired,
};
