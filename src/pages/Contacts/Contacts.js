import { Form } from '../../components/Form/Form';
import { ListItem } from '../../components/ListItem/ListItem';
import { Filter } from '../../components/Filter/Filter';
import { Wrapper, Title, Subtitle } from './Contacts.styled';

export function Contacts() {

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