// src/components/SearchBox/SearchBox.jsx
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import style from './SearchBox.module.css';

const SearchBox = () => {
  const filterName = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleSearchContact = (ev) => {
    dispatch(changeFilter(ev.target.value));
  };

  return (
    <div className={style.searchArea}>
      <p className={style.text}>Find contacts by name</p>
      <input
        type="text"
        className={style.inp}
        value={filterName}
        onChange={handleSearchContact}
      />
    </div>
  );
};

export default SearchBox;
