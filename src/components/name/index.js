import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Name = props => {
    return (
        <div className={'name '+(props.type ? props.type: '')}> 
            {props.name}
        </div>
    );
};

Name.propTypes = {
    type: PropTypes.oneOf(['highlight', 'disabled']),
    name: PropTypes.string.isRequired
};

export default Name;