import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/contactsSlice';
import { setFilterValue } from '../../store/reduxFunctions';
import { FilterWrap } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);

  const changeFilter = setFilterValue(dispatch, setFilter);

  return (
    <FilterWrap>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={(e) => changeFilter(e)}
        size="20"
      />
    </FilterWrap>
  );
};

export default Filter;
