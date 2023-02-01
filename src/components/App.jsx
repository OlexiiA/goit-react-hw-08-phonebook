import { Form } from './Form';
import { ListItem } from './ListItem';
import { Filter } from './Filter';
import { Wrapper, Title, Subtitle } from './App.styled';

export function App() {

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <Form/>
      <Subtitle>Contacts</Subtitle>
      <Filter/>
      <ListItem />
    </Wrapper>
  );
}
