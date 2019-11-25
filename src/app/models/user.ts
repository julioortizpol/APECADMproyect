export class User {
    id: number;
    username: string;
    password: string;
    mail: string;
    role: string;
}

export class Employed extends User{
    Dni: string;
    name: string;
    lastName: string;
    phone: string;
    hiringDate: string;
}