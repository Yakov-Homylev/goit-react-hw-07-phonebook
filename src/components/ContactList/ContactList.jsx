import React from "react";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";
import { getVisibleContacts } from "../../redux/contacts/contacts-selector";
import { List, Notification } from "./ContactList.styled";

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);

  return (
    <List>
      {contacts.length > 0 ? (
        contacts.map((el) => {
          return (
            <ContactItem
              key={el.id}
              id={el.id}
              name={el.name}
              number={el.number}
            />
          );
        })
      ) : (
        <Notification>This list is empty</Notification>
      )}
    </List>
  );
}
