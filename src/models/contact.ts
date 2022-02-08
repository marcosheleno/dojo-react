export interface Phone {
    phone?: number
    ddi?: number
    type?: string
}

export interface Email{
    email?:string
    tipo?: string
}

export interface Contact {
    id?: number
    name?: string
    group?: string[]
    emails?: Email[]
    phones?: Phone[]
}

export default Contact;