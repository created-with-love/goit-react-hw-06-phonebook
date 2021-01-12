import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash, FaAddressCard } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import s from './Contacts.module.css';
import actions from '../../redux/contacts/contacts-action';

const variants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const Contacts = ({ contacts, onDeleteBtnClick }) => {
  const listClasses = classNames({
    [s.list]: true,
    'list-border': contacts.length,
  });

  return (
    <div className={listClasses}>
      <ul className={s.list__ul}>
        {contacts.map(person => (
          <motion.li
            initial="hidden"
            animate="visible"
            variants={variants}
            key={person.id}
            className={s.search__contact}
          >
            <IconContext.Provider
              value={{
                color: 'black',
                size: '1.6em',
                className: 'react-icons',
              }}
            >
              <FaAddressCard onClick={() => onDeleteBtnClick(person.id)} />
            </IconContext.Provider>
            <p className={s.search__text}>
              {person.name} : {person.number}
            </p>
            <div className={s.trash}>
              <IconContext.Provider
                value={{
                  color: 'red',
                  size: '1.1em',
                  className: 'react-icons',
                }}
              >
                <FaTrash onClick={() => onDeleteBtnClick(person.id)} />
              </IconContext.Provider>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteBtnClick: PropTypes.func.isRequired,
};

const filteredContacts = (contacts, filter) => {
  const getFiltredContacts = contacts => {
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter(person =>
      person.name.toLowerCase().includes(lowerCaseFilter),
    );
  };
  return getFiltredContacts(contacts);
};

const mapStateToProps = state => ({
  contacts: filteredContacts(state.contacts.items, state.contacts.filter),
  // contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onDeleteBtnClick: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
