import { model, Schema, Document } from "mongoose"
import bcrypt from 'bcrypt'


export interface User {
    name: string
    email: string
    password: string
    // organization: Types.ObjectId
}


// const userSchema = new Schema<User>({
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     password: { type: String, required: true }
// })

const userSchema: Schema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    // organization: { type: Schema.Types.ObjectId, ref: 'Organization'}
})


// add hashed password before saving user information
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    return next()
})

//verify password
// userSchema.methods.comparePassword = async function(userPassword: string) {
//     try {
//         return await bcrypt.compare(userPassword, this.password)
//     } catch (error) {
//         throw new Error('Password Comparison Failed')
//     }
// }

userSchema.methods.comparePasswords = function (
    candidatePassword: string,
    next: (err: Error | null, same: boolean | null) => void,
  ) {
     bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
      if (err) {
        return next(err, null);
      }
      next(null, isMatch);
    });
  };
  


export interface IUser extends Document {
    email: string
    name: string
    password: string
    comparePasswords(userPassword: string, next: (err: Error | null, same: boolean | null) => void): void
}

export const User = model<User>('User', userSchema)