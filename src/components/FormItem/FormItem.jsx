import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/operations"
import {findeContactByName} from "../notification/notification";
import { selectStatus, selectContacts } from "redux/selectors";
import { List, ListItem, Item, Btn } from "./FormItem.styled"

export const FormItem = () => {
    const contacts = useSelector(selectContacts);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();

    return (
        <List>
            {contacts.length > 0 && 
                findeContactByName.map(({ id, name, number }) => (
                    <ListItem key={id}>
                        <Item>{name}: {number}</Item>
                        <Btn type="button" disabled={status} onClick={() => dispatch(deleteContact(id))}>Delete</Btn>
                    </ListItem>
                ))
            }
        </List >
    )
}
