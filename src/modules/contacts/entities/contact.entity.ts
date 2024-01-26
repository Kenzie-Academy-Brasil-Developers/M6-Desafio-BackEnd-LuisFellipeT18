import { randomUUID } from "node:crypto"
import { User } from "src/modules/users/entities/user.entity"

export class Contact {
    readonly id: string
    name: string
    email: string
    telephone: string
    Registration_Date: Date
    userId: string

    constructor(){
        this.id = randomUUID()
        this.Registration_Date = new Date();
    }

}
