import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { newFilter } from "../../redux/contacts/contacts-actions";
import { Section, Title, FilterInput } from "./Filter.styled";

export default function Filter({ title }) {
  const dispatch = useDispatch();

  const onFilterChange = (e) => {
    dispatch(newFilter(e.target.value));
  };

  return (
    <Section>
      <Title>{title}</Title>
      <FilterInput type="text" onChange={onFilterChange} />
    </Section>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};
