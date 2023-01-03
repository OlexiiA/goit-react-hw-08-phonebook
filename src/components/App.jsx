import React from "react";
import { nanoid } from 'nanoid'
import { Form } from "./Form";
import { FormItem } from "./FormItem";
import { Filter } from './Filter'
import { Wrapper, Title, Subtitle } from "./App.styled";


export class App extends React.Component {

  state = {
    contacts:[],
    filter: '',
  }

  componentDidMount() {
    const getStorageContacts = localStorage.getItem('contacts')

    if (getStorageContacts !== null) {
      this.setState({
        contacts: JSON.parse(getStorageContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }

    const { contacts } = this.state;
    const checkContact = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
    if (checkContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }))

  }

  filterByName = (e) => {
    this.setState({
      filter: e.currentTarget.value
    })
  }

  visibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalized = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalized));
  };

  handleDeleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const visibleContacts = this.visibleContacts();

    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <Form onSubmit={this.addContact} />
        <Subtitle>Contacts</Subtitle>
        <Filter
          filterName={this.filterByName}
          value={this.state.filter}
        />
        <FormItem
          onDelete={this.handleDeleteContact}
          contacts={visibleContacts}
        />
      </Wrapper>
    )
  }

};
