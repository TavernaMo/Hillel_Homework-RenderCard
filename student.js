import User from './user.js';


export class Student extends User{
    constructor(name,age,img,role,courses){
        super(name,age,img,role,courses)
    }
}
