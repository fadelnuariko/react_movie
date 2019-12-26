import React from 'react';
import propTypes from 'prop-types';

import './FourColGrid.css';

const FourColGrid = (props) => {

    const renderElement = () => {
        const gridElements = props.children.map((element, i) => {
            return (
                <div key={i} className="rmdb-grid-element">
                    {element}
                </div>
            )
        })
        return gridElements;
    }

    return (
        <div className="rmdb-grid">
            {props.header && !props.loading ? <h1>{props.header}</h1> : null}

            <div className="rmdb-grid-content">
                {renderElement()}
            </div>
        </div>
    )
}

FourColGrid.propTypes = {
    header: propTypes.string,
    loading: propTypes.bool
}

export default FourColGrid;