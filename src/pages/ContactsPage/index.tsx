import {} from './styles';
import ContactsList from '../../components/Contacts';
import { fetchContacts } from '../../services/contacts';

const contacts = fetchContacts();

export default function ContactsPage() {
    return <ContactsList contacts={contacts} />;
}
