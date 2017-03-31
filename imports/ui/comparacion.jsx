import React, {Component, PropTypes} from 'react';

export default class Comparacion extends Component
{
  render()
  {
  return (
  <div className="row">
  <div className="col-md-2"></div>
  <div className="col-md-8">
  <li><span className="text historial">
          <strong>{this.props.comparacion.username}</strong>:
      {this.props.comparacion.name1}
      {this.props.comparacion.des1}
      {this.props.comparacion.price1}
     <strong> VS</strong>
      {this.props.comparacion.name2}
      {this.props.comparacion.des2}
      {this.props.comparacion.price2}
        </span></li>
        </div>
   <div className="col-md-2"></div>
  </div>
  );
  }
}

Comparacion.propTypes= {

comparacion: PropTypes.object.isRequired,
};
