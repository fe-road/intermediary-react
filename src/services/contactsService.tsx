import { ContactModel } from '../models/ContactModel';

import { contactList } from '../database/contactsDatabase';

export const fetchAllContacts = (): Array<ContactModel> => {
    return contactList;
};

export const fetchContactById = (id: string): ContactModel | undefined => {
    if (!id) {
        return;
    }

    return contactList.find((item) => item.id === id);
};