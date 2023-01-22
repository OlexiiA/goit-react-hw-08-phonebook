import React from "react";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { List, ListItem, Item, Btn } from "./FormItem.styled"

export const FormItem = ({ onDelete }) => {
    const contacts = useSelector(state => state.contacts.contacts)

    return (
        <List>
        {
            contacts.map(({ id, name, number }) => (
                <ListItem key={id}>
                    <Item>{name}: {number}</Item>
                    <Btn type="button" onClick={() => onDelete(id)}>Delete</Btn>
                </ListItem>
            ))
        }
         </List >
    )
}


FormItem.propTypes = {
    onDelete: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
}