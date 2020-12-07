import  User  from "./user.js"
import {Student} from './student.js';
import {Lector} from './lector.js';
import {Admin} from './admin.js';


export class Renderer {
    
    static handle(user) {

        let root = document.querySelector('.root'),
            newDiv = document.createElement("div")
            newDiv.classList.add("cart")
            root.append(newDiv)

        if (user.getName() !== undefined) {
            let h1 = document.createElement('h1')
            h1.innerHTML= user.getName()
            newDiv.append(h1)
           
        if (user.getAge() !== undefined){
            let p = document.createElement('p')
            p.innerHTML= user.getAge()
            newDiv.append(p)
        }

        }

        if (user.getImg() !== undefined){
            let img = document.createElement('img')
            img.src=`${user.getImg()}`
            newDiv.append(img)
        }

        if (user.getRole() !== undefined){
            let p = document.createElement('p')
            p.innerHTML= user.getRole()
            newDiv.append(p)
        }

        if (user.getCourses() !== undefined && user.getCourses().length !== 0 && typeof user.getCourses()=== "object") {

            for(let key in user.getCourses()){
                console.log(user.getCourses()[key])
                user.getCourses()[key]?.title && user.getCourses()[key]?.mark
                let p = document.createElement('p')
                p.innerHTML=  user.getCourses()[key]?.mark + "<hr>" + user.getCourses()[key].title
                newDiv.append(p)

            } 
        }
    }
}
