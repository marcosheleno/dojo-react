import Contact from '../../models/contact';
import { Card } from './Card';

const ContactsList = ({ contacts }: { contacts?: Contact[] }) => {
    if (!contacts || !contacts.length) {
        return (
            <div>
                <p data-testid="contacts">Nenhum contato encontrado</p>
            </div>
        );
    }

    return (
        <>
            {contacts.map((contact) => {
                return <Card contact={contact}></Card>;
            })}
        </>
    );
};

export default ContactsList;
