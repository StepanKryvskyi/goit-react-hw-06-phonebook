import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { setFilter, addContact } from '../../store/contactsSlice';
import { handleFormSubmit } from '../../store/reduxFunctions';
import { Container, FormInput, SubmitButton } from './ContactForm.styled';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const handleFormSubmitAction = handleFormSubmit(
      dispatch,
      addContact,
      contacts,
      nanoid
    );

    handleFormSubmitAction({ name, number });
    dispatch(setFilter(''));

    setName('');
    setNumber('');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormInput>
          Name
          <br />
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </FormInput>
        <br />
        <FormInput>
          Number
          <br />
          <input
            type="tel"
            placeholder="Enter number"
            name="number"
            value={number}
            onChange={handleChange}
            required
          />
        </FormInput>
        <br />
        <SubmitButton type="submit">Add contact</SubmitButton>
      </form>
    </Container>
  );
}
