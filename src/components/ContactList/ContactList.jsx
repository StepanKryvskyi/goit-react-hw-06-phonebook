import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from './ContactListItem';
import { ContactsList } from './ContactList.styled';
import { deleteContact } from '../../store/contactsSlice';
import { handleDeleteItem } from '../../store/reduxFunctions';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const onDeleteContact = handleDeleteItem(dispatch, deleteContact);

  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ContactsList>
  );
};

export default ContactList;
