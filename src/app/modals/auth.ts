export interface Ilogin{
    email : string;
    password : string
}

export interface Isignin{
    email : string;
    password : string;
    userRole : 'buyer' | 'admin' | 'superAdmin'
}