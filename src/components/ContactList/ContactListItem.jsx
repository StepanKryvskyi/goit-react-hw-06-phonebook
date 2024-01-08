import React from 'react';
import { DeleteButton } from './ContactList.styled';

const ContactListItem = ({ id, name, number, onDeleteContact }) => (
  <li>
    <span>{name}</span>:&nbsp;
    <span>{number}</span>&nbsp;
    <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
      Delete
    </DeleteButton>
  </li>
);

export default ContactListItem;
