import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, fetchContacts } from "../../redux/operations"
import { selectStatus, selectItems, selectFilter } from "redux/selectors";
import { List, ContactList, Item, Btn } from "./ListItem.styled"

export const ListItem = () => {
    const contacts = useSelector(selectItems);
    const status = useSelector(selectStatus);
    const filterName = useSelector(selectFilter);
    const dispatch = useDispatch();
    
    //=========Перший запит на бек===========//
    useEffect(() => {
     dispatch(fetchContacts())
    }, [dispatch]);
   //========================================//
   
    const findeContactByName = () => {
        // if (!filterName) return contacts;
        const normalized = filterName.toLowerCase();
        return contacts.filter(contact => {
            return contact.name.toLowerCase().includes(normalized);
        });
    };

    return (
        <List>
            {contacts && findeContactByName(contacts).map(({ id, name, number }) => (
                <ContactList key={id}>
                    <Item>{name}: {number}</Item>
                    <Btn type="button" disabled={status} onClick={() => dispatch(deleteContact(id))}>Delete</Btn>
                </ContactList>
            ))
            }
        </List >
    )
}
