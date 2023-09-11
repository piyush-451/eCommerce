const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    orderedAt : {type:Date,default:Date.now},
    quantity:{type:Number,required:true},
    cost:{type:Number,required:true},
    name:{type:String,required:true},
    image:{type:String,required:true}
})

const WishlistSchema = new mongoose.Schema({
    _id:{type:mongoose.Schema.Types.ObjectId,required:true},
    name:{type:String,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})

const UserSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    orders:[{type:OrderSchema}],
    wishlist:[{type:WishlistSchema}],
    isAdmin:{type:Boolean,default:false}
})

const User = mongoose.model('User',UserSchema)
const Order = mongoose.model('Order',OrderSchema)

module.exports = {User,Order}