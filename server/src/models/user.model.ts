import { model, Schema, Document } from "mongoose"
import { IRecipe } from "./recipe.model"
import bcrypt from 'bcrypt'


export interface IUser extends Document {
    firstName: string
    lastName: string
    email: string
    password: string
    recipes?: IRecipe[]
    comparePasswords(userPassword: string, next: (err: Error | null, same: boolean | null) => void): void
}

const userSchema: Schema = new Schema<IUser>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    recipes: []
})


// add hashed password before saving user information
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
    }
    return next()
})


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
  

export const User = model<IUser>('User', userSchema)