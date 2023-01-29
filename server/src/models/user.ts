import mongoose, { Document, Schema } from "mongoose"

export interface User {
    name: string
}

export interface UserModel extends User, Document {}

const UserSchema: Schema = new Schema(
    {
        name: { type: String, required: true }
    },
    {
        versionKey: false
    }
)

export default mongoose.model<UserModel>('User', UserSchema)