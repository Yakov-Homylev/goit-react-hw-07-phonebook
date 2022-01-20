import React from "react";
import PropTypes from "prop-types";
import { Section, Title, FilterInput } from "./Filter.styled";
import { useDispatch } from "react-redux";
import { filter } from "../../redux/filter/filter-action";

export default function Filter({ title }) {
  const dispatch = useDispatch();

  const onFilterChange = (e) => {
    dispatch(filter(e.target.value));
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
