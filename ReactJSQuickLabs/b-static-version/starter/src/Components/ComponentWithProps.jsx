import React from "react";
import propTypes from 'prop-types';

const ComponentWithProps = (props) => {
    return(
        <>
        <h1>{props.header}</h1>
        <p>{props.content}</p>
        <p>This is a number from props: {props.number}</p>
        <p>This is a prop that doesn't exist: {props.nonexistent} </p>
        </>
    )
}

ComponentWithProps.propTypes = {
    header: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
    number: propTypes.number.isRequired
};

ComponentWithProps.defaultProps = {
    header: 'Header from defaults',
    content: 'Content from defaults',
    number: 10
};




export default ComponentWithProps;

