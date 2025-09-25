import mongoose from 'mongoose';



const userSchema = new mongoose.Schema({
    _id: {type :String ,reqired : true},
    name: {type :String ,reqired : true},
    email: {type :String ,reqired : true},
    image: {type :String ,reqired : true},


})

const user =mongoose.model('user', userSchema)
export default user