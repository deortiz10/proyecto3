import React, {Component, PropTypes} from 'react';

export default class Comparacion extends Component
{
  render()
  {
  return (
  <li>{this.props.comparacion.name}</li>
  );
  }
}

Comparacion.propTypes= {

comparacion: PropTypes.object.isRequired,
};
