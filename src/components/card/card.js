import React from  'react';
import PropTypes from 'prop-types';

const Card = ({data})=>{
    return (
        <div className="col-md-4">
        <div className="card">
            <img src={data.Poster} alt={data.Title} className="card-img-top" width="100"/>
            <div className="card-body">
                <h4>{data.Title} {data.Year}</h4>
                <p>{data.Type}</p>
            </div>
            
        </div>
        </div>
    )
}

Card.prototypes={
    movie:PropTypes.shape({
        Title:PropTypes.string,
        Year:PropTypes.string,
        Poster:PropTypes.string,
        Type:PropTypes.string,
    }).isRequired
    
}

export default Card;