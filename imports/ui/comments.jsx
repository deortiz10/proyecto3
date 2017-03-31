import React, {Component, PropTypes } from 'react';

class Comments extends Component{

    render(){
        if(this.props.comments){
            return(
                <div className="center">
                    {this.props.comments.comentar}
                </div>
            );
        }else{
            return(
                <div>
                  <p>No hay nada</p>
                </div>
            );
        }
    }
}

Comments.propTypes= {
    comments: PropTypes.object.isRequired,
};
export default Comments;
