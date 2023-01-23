import React from "react";
import { addFilter } from "redux/contactSlice";
import { useDispatch, useSelector } from "react-redux";
import { InputForm } from "./Filter.styled"


export const Filter = () => {
    const filterValue = useSelector(state => state.contacts.filter)
    const dispatch = useDispatch();

    return (
        <InputForm>
            <label><h3>Find contact by name</h3>
                <input type="text" value={filterValue} onChange={(e) => dispatch(addFilter(e.target.value))} style={{ borderRadius: '10px', marginTop: '5px' }} />
            </label>
        </InputForm>
    )

}
