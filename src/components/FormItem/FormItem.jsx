import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/operations"
import { selectStatus, selectContacts, selectFilter } from "redux/selectors";
import { List, ListItem, Item, Btn } from "./FormItem.styled"

export const FormItem = () => {
    const contacts = useSelector(selectContacts);
    const status = useSelector(selectStatus);
    const filterName = useSelector(selectFilter);
    const dispatch = useDispatch();

    const findeContactByName = () => {
        const normalized = filterName.toLowerCase();
        return contacts.filter(contact => {
            return contact.name.toLowerCase().includes(normalized);
        });
    };

    return (
        <List>
            {contacts && findeContactByName(contacts).map(({ id, name, number }) => (
                <ListItem key={id}>
                    <Item>{name}: {number}</Item>
                    <Btn type="button" disabled={status} onClick={() => dispatch(deleteContact(id))}>Delete</Btn>
                </ListItem>
            ))
            }
        </List >
    )
}
