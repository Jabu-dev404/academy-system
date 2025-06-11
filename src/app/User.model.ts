import { Role } from "./Role.mode";

export interface User {
    id:number;
    username:string;
    password:string;
    active:boolean;
    role?:Role;
}