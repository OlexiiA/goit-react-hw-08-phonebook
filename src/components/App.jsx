import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form';
import { FormItem } from './FormItem';
import { Filter } from './Filter';
import { Wrapper, Title, Subtitle } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? []);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('useEffect');
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const checkContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (checkContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    setContacts(prevState => [contact, ...prevState]);
  };

  const filterByName = e => {
    setFilter(e.currentTarget.value);
  };

  const visibleContacts = () => {
    const normalized = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
  };

  const handleDeleteContact = id => {
    setContacts(prevState => prevState.filter(el => el.id !== id));
  };

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <Form onSubmit={addContact} />
      <Subtitle>Contacts</Subtitle>
      <Filter filterName={filterByName} value={filter} />
      <FormItem onDelete={handleDeleteContact} contacts={visibleContacts()} />
    </Wrapper>
  );
}
