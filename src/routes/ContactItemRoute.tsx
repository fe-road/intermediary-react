import { Params } from 'react-router-dom';
import ContactItem from '../components/contacts/ContactItem.tsx';

import { ContactModel } from '../models/ContactModel.ts';
import { fetchContactById } from '../services/contactsService.tsx';

type RouteParams = { params: Params<'id'> };

export const loader = async ({ params }: RouteParams): Promise<ContactModel | undefined> => {
    return fetchContactById(params.id ?? '');
};

const ContactItemRoute = () => {
  return (
    <ContactItem />
  );
}

export default ContactItemRoute;
