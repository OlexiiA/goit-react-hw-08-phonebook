import React, { Component } from "react";
import PropTypes from 'prop-types';
import { InputForm, Btn } from "./Form.styled";

export class Form extends Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    state = {
        name: '',
        number: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,

        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        this.setState({ name: '', number: '' })
    }

    render() {
        return (
            <InputForm onSubmit={this.handleSubmit}>
                <label>
                    <h3>Name</h3>
                    <input
                        value={this.state.name}
                        onChange={this.handleInput}
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
                        value={this.state.number}
                        onChange={this.handleInput}
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
        )

    }
}