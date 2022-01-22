import React from "react";
import PropTypes from "prop-types";
import { Item, NumberSpan, DeleteButton } from "./ContactList.styled";
import { useDeleteContactMutation } from "../../redux/contacts/contacts";
import Loader from "../Loader/Loader";

export default function ContactItem({ id, name, number, setDeleted }) {
  const [onDeleteClick, { isLoading }] = useDeleteContactMutation();

  const onBtnClick = () => {
    setDeleted(true);
    onDeleteClick(id);
  };

  return (
    <>
      {isLoading && <Loader />}
      <Item>
        {name + ":"} <NumberSpan>{number}</NumberSpan>
        <DeleteButton type="button" disabled={isLoading} onClick={onBtnClick}>
          Delete
        </DeleteButton>
      </Item>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
