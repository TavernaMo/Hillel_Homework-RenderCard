export default class User {
  constructor(name,age,img,role,courses){
      this.name=name;
      this.age=age;
      this.img = img;
      this.role=role;
      this.courses=courses
  }

  getName(){
    return this.name
  }

  getAge(){
    return this.age
  }

  getImg(){
    return this.img
  }

  getRole(){
    return this.role
  }
  
  getCourses(){
    return this.courses
  }

  static build(user) {
    return new this(user.name, user.age, user.img, user.role, user.courses)
  }

}


