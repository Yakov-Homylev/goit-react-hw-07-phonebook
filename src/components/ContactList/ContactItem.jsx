import React from "react";
import PropTypes from "prop-types";
import { Item, NumberSpan, DeleteButton } from "./ContactList.styled";
import { useDeleteContactMutation } from "../../redux/contacts/contacts";

export default function ContactItem({ id, name, number }) {
  const [onDeleteClick, { isLoading }] = useDeleteContactMutation();

  return (
    <Item>
      {name + ":"} <NumberSpan>{number}</NumberSpan>
      <DeleteButton
        type="button"
        disabled={isLoading}
        onClick={() => onDeleteClick(id)}>
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
