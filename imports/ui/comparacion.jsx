import React, {Component, PropTypes} from 'react';

export default class Comparacion extends Component
{
  render()
  {
  return (
  <li><span className="text">
          <strong>{this.props.task.username}</strong>: {this.props.comparacion.nombre}
        </span>}</li>
  );
  }
}

Comparacion.propTypes= {

comparacion: PropTypes.object.isRequired,
};
