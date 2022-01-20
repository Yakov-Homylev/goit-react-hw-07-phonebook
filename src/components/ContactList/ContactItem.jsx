import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contacts-actions";
import PropTypes from "prop-types";
import { Item, NumberSpan, DeleteButton } from "./ContactList.styled";

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <Item>
      {name + ":"} <NumberSpan>{number}</NumberSpan>
      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteButton>
    </Item>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
