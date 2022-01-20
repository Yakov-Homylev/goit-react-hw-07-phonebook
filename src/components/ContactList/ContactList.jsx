import React from "react";
import ContactItem from "./ContactItem";
import { List, Notification } from "./ContactList.styled";
import { useGetContactsQuery } from "../../redux/contacts/contacts";
import { useSelector } from "react-redux";

export default function ContactList() {
  const { data, isLoading } = useGetContactsQuery();
  const filterQuery = useSelector((state) => state.filter);

  let visibleContacts = [];

  if (!isLoading) {
    visibleContacts = data.filter((contact) =>
      contact.name.toLowerCase().includes(filterQuery)
    );
  }

  const isContactsNotEmpty = visibleContacts && visibleContacts.length > 0;

  return (
    <List>
      {isContactsNotEmpty ? (
        visibleContacts.map((el) => {
          return (
            <ContactItem
              key={el.id}
              id={el.id}
              name={el.name}
              number={el.phone}
            />
          );
        })
      ) : (
        <Notification>This list is empty</Notification>
      )}
    </List>
  );
}
