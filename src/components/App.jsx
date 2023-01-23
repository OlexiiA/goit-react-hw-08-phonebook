import { Form } from './Form';
import { FormItem } from './FormItem';
import { Filter } from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from 'redux/contactSlice';
import { Wrapper, Title, Subtitle } from './App.styled';

export function App() {

  const contactsValue = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const addContact = ({name, number}) => {
    const checkContact = contactsValue.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addItems({ name, number }));
  };



  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <Form onSubmit={addContact} />
      <Subtitle>Contacts</Subtitle>
      <Filter/>
      <FormItem />
    </Wrapper>
  );
}
