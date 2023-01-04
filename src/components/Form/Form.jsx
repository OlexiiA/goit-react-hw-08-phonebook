import { useState } from 'react';
import PropTypes from 'prop-types';
import { InputForm, Btn } from './Form.styled';

export function Form({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInput = e => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value);
                break;
            case 'number':
                setNumber(e.target.value);
                break;
            default:
                console.log(`Error in ${e.target.name}`);
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ name, number });
        setName('');
        setNumber('');
    };

    return (
        <InputForm onSubmit={handleSubmit}>
            <label>
                <h3>Name</h3>
                <input
                    value={name}
                    onChange={handleInput}
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
                    value={number}
                    onChange={handleInput}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    style={{ borderRadius: '10px', marginBottom: '10px' }}
                />
            </label>
            <Btn type="submit">Add contact</Btn>
        </InputForm>
    );
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
