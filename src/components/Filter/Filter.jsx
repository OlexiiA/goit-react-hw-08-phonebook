import React from "react";
import { addFilter } from "redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import {selectFilter} from "../../redux/selectors";
import { InputForm } from "./Filter.styled"



export const Filter = () => {
    const dispatch = useDispatch();
    const filterValue = useSelector(selectFilter);
    

    return (
        <InputForm>
            <label><h3>Find contact by name</h3>
                <input type="text" value={filterValue} onChange={(e) => dispatch(addFilter(e.target.value))} style={{ borderRadius: '10px', marginTop: '5px' }} />
            </label>
        </InputForm>
    )

}
