import React, { Component } from 'react';

class Recomendacion extends Component{

    render(){
        if(this.props.item){
            return(
                <div>
                  <div className="recomendaciones">
                  <h2> Te sugerimos... </h2>
                  </div>
                    <img src={this.props.item.thumbnailImage} alt=""/>
                    <h5>Nombre: {this.props.item.name}</h5>
                </div>
            );
        }else
        {
            return(
                <div>
                No hay recomendaciones
                </div>
            );
        }

    }

}

export default Recomendacion;
