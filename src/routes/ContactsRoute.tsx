import { Outlet } from 'react-router-dom';

import Contacts from '../components/contacts/Contacts.tsx';

const ContactsRoute = () => {
  return (
    <>
        <Contacts />
        <Outlet />
    </>
  );
}

export default ContactsRoute;
