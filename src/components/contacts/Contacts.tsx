import { useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchAllContacts } from '../../services/contactsService';
import { ContactModel } from '../../models/ContactModel';

const Contacts = () => {
    const [contactList, setContactList] = useState<Array<ContactModel>>(fetchAllContacts());

  return (
    <>
      <p>Contacts</p>
      <ul>
        {contactList.map((item) => (
            <li key={item.id}>
                <Link to={`/contacts/${item.id}`}>{item.name}</Link>
            </li>
        ))}
      </ul>
    </>
  )
}

export default Contacts;
