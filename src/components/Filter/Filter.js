import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { setFilter } from '../../redux/contacts/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilteredContacts);

  const handleOnChange = e => {
    e.preventDefault();
    dispatch(setFilter(e.target.value));
  };

  return (
    <Label>
      <h3>Find contacts by name</h3>
      <Input
        name="filter"
        type="text"
        value={filterValue}
        onChange={handleOnChange}
      ></Input>
    </Label>
  );
};
export default Filter;
