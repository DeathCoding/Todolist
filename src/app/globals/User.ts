export interface User {
    name: string,
    email: string,
    password: string
  }
  
export class User {
    name: string;
    email: string;
    password: string;

    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

}
