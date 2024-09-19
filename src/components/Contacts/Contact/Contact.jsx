import style from './Contact.module.css';

const Contact = ({ contactId, contactName, contactNumber, deleteContact }) => {
  return (
    <div className={style.contact}>
      <p className={style.name}>{contactName}</p>
      <p className={style.number}>{contactNumber}</p>
      <button
        className={style.deleteBtn}
        onClick={() => deleteContact(contactId)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
