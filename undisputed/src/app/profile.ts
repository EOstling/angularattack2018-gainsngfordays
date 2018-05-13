/*Kennon's Profile Class*/

export class Profile
{
    fname: string;
    lname: string;
    email: string;
    age: number;
    username: string;
    password: string;

    constructor(fname: string, lname: string, email: string, age: number, username: string, password: string)
    {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.age = age;
        this.username = username;
        this.password = password;
    }
}
