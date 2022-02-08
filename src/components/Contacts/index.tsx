import Contact from "../../models/contact";

const ContactsList = ({ contacts }: { contacts?: Contact[] }) => {
    return (
        
    <div>
        <p data-testid="contacts">Nenhum contato encontrado</p>
    </div>

    );
}

export default ContactsList