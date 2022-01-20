import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, InputName, Input, AddButoon } from "./ContactForm.styled";
import { addContact } from "../../redux/contacts/contacts-actions";

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const addContacts = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const number = e.target.number.value;
    const isNameInContacts = contacts.find((contact) => contact.name === name);
    const isNumberInContacts = contacts.find(
      (contact) => contact.number === number
    );
    if (isNameInContacts) {
      alert("This name in contacts");
      return;
    }
    if (isNumberInContacts) {
      alert("This number in contacts");
      return;
    }

    dispatch(addContact(name, number));
    e.currentTarget.reset();
  };

  return (
    <Form onSubmit={addContacts}>
      <InputName>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputName>
      <InputName>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputName>

      <AddButoon type="submit">Add contacts</AddButoon>
    </Form>
  );
}

export default ContactForm;
