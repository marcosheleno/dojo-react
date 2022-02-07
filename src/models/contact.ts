interface Phone {
    phone?: number
    ddi?: number
    type?: string
}

interface Email{
    email:string
    tipo: string
}

interface Contact {
    id?: number
    name?: string
    group?: string[]
    emails?: Email[]
    phones?: Phone[]
}

export default Contact;