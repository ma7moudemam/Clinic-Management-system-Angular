export class Doctor {
    constructor(
        public  _id:Number,
        public  name:String,
        public  email:String,
        public  image:String,
        public  hourRate:Number,
        public  speciality:String,
        public  password:Number
    ){}
}

export interface IUser {
    _id?:Number
    name:String
    email:String
    image:String
    hourRate?:Number
    speciality?:String
    password:Number
    role: String
    phoneNumber: String
}