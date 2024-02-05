import { randomUUID } from "crypto"

export class Contact {
    readonly id: string
    name!: string
    email!: string
    telephone!: string
    Registration_Date: Date
    readonly userId: string

    constructor(){
        this.id = randomUUID()
        this.Registration_Date = new Date();
    }

}
