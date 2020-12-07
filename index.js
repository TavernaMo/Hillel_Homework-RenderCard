import  User  from "./user.js"
import {Student} from './student.js';
import {Lector} from './lector.js';
import {Admin} from './admin.js';
import {Renderer} from './renderer.js';


const usersList = 'data.json'

async function getResponse (file){
    const request = await fetch(file)
    if(request.ok){
       let response = await request.json()
       return response
    }else {
        console.error('Server is not response')
    }
}

let request = getResponse(usersList).then(data => {
    if(data?.users){
        if(Array.isArray(data.users)){
            let roles = data.users.map(el => {
                let user;
                for(let key in el){ 
                    switch(el.role){
                        case 'student': 
                            user = Student.build(el)
                            break;
                        case 'lector':
                            user = Lector.build(el)
                            break;
                        case 'admin':
                            user = Admin.build(el)
                            break;
                    }
                }
                return user;
            })
            console.log(roles)
            return roles
        }
    }
}).then(data => {
    data.forEach((el,index) => {
        Renderer.handle(el)
    });
})