import { useSelector, useDispatch } from 'react-redux';
import Contact from '../Contact/Contact';
import style from './ContactList.module.css';
import { deleteContact, selectContacts } from '../../../redux/contactsSlice';
import { selectNameFilter } from '../../../redux/filtersSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterName = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <ul className={style.list}>
      {filteredContacts.map((contact) => (
        <li className={style.item} key={contact.id}>
          <Contact
            contactId={contact.id}
            contactName={contact.name}
            contactNumber={contact.number}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
