import { model, Schema } from "mongoose"
import bcrypt from 'bcrypt'


export interface User {
    name: string
    email: string
    password: string
}


const userSchema = new Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})

// add hashed password before saving user information
userSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})

export const User = model<User>('User', userSchema)