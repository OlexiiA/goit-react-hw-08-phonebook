import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectItems, selectStatus } from 'redux/selectors';
import { InputForm, Btn } from './Form.styled';

export function Form() {
   
    const dispatch = useDispatch();
    const items = useSelector(selectItems);
    const status = useSelector(selectStatus);

    const addNewContact = (event) => {
     event.preventDefault();
     const {name, number} = event.target;
        const checkContact = items.find(item => item.name.toLowerCase() === name.value.toLowerCase());
    
        if (checkContact) {
         return alert(`${name.value} is already in contacts.`);
        }
        dispatch(
            addContact({
                name: name.value, 
                number: number.value,
            })
        );
        event.target.reset();
    };
   

    return (
        <InputForm onSubmit={addNewContact}>
            <label>
                <h3>Name</h3>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    style={{ borderRadius: '10px', marginBottom: '5px' }}
                />
            </label>
            <label>
                <h3>Number</h3>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    style={{ borderRadius: '10px', marginBottom: '10px' }}
                />
            </label>
            <Btn type="submit" disabled={status}>Add contact</Btn>
        </InputForm>
    );
}

