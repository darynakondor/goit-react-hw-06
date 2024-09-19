import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/Contacts/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

const App = () => {
  return (
    <div>
      <h1 className='title'>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
