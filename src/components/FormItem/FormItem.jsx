import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactSlice"
import {findeContactByName} from "../notification/notification";
import PropTypes from 'prop-types';
import { List, ListItem, Item, Btn } from "./FormItem.styled"

export const FormItem = () => {
    const contacts = useSelector(findeContactByName);
    const dispatch = useDispatch();

    return (
        <List>
            {
                contacts.map(({ id, name, number }) => (
                    <ListItem key={id}>
                        <Item>{name}: {number}</Item>
                        <Btn type="button" onClick={() => dispatch(deleteContact(id))}>Delete</Btn>
                    </ListItem>
                ))
            }
        </List >
    )
}


FormItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
}