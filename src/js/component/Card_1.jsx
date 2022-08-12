import React from "react";
import PropTypes from 'prop-types';


const Card_1 = (props) => {
	
    
    return (
    <div className="col">
        <div className="border-5 card bg-dark p-3 w-75">
            <h1 className="card-title text-white text-center">{props.number}</h1>
        </div>
      </div>
    );
};
Card_1.propTypes = {
    number: PropTypes.string
}

export default Card_1;
