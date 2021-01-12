import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actions from '../../redux/contacts/contacts-action';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label htmlFor="search" className={s.Search__box}>
    <p className={s.search__label}>Find contacts by name:</p>
    <input
      className={s.search__input}
      type="search"
      name="search"
      id="search"
      onChange={onChange}
      value={value}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.addFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
