import { model, Schema } from "mongoose"

export interface User {
    name: string
    email: string
}


const userSchema = new Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true }
})

export const User = model<User>('User', userSchema)

// export default mongoose.model('User', userSchema)