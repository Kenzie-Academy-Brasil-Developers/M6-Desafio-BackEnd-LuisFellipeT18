import { randomUUID } from "crypto"

export class User {
    readonly id: string
    name!: string
    email!: string
    password!: string
    telephone!: string
    Registration_Date!: Date

    constructor(){
        this.id = randomUUID()
        this.Registration_Date = new Date();
    }
}
