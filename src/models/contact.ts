interface Phone {
    phone?: number
    ddi?: number
    type?: string
}

interface Contact {
    id?: number
    name?: string
    group?: string[]
    phones?: Phone[]
}

export default Contact;