import { useLoaderData } from 'react-router-dom';
import { ContactModel } from '../../models/ContactModel';

const ContactItem = () => {
    const contact: ContactModel | undefined = useLoaderData() as ContactModel | undefined;

    if (!contact) {
        return null;
    }

    return (
        <>
            <p>Specific Contact</p>
            <p>ID: {contact?.id}</p>
            <p>Name: {contact?.name}</p>
        </>
    );
}

export default ContactItem;
