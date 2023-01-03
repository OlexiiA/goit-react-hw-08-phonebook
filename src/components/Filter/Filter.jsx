import React from "react";
import PropTypes from 'prop-types';
import { InputForm } from "./Filter.styled"

export const Filter = ({ value, filterName }) => (
    <InputForm>
        <label><h3>Find contact by name</h3>
            <input type="text" value={value} onChange={filterName} style={{ borderRadius: '10px', marginTop: '5px' }} />
        </label>
    </InputForm>
)

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    filterName: PropTypes.func.isRequired,
};