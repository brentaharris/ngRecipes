import { NextFunction, Request, Response } from "express"
import mongoose from "mongoose"
import User from "../models/user"

const createUser = (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name
    })

    return user
            .save()
            .then((user) => res.status(201).json({ user }))
            .catch((error) => res.status(500).json({ error }))
}

const getUserById = (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId

    return User
        .findById(userId)
        .then(user => user ? res.status(200).json({ user }) : res.status(404).json({ message: "User not found"}))
        .catch((error) => res.status(500).json({ error }))
}

const getAllUsers = (req: Request, res: Response, next: NextFunction) => {

    return User
        .find()
        .then(users => users ? res.status(200).json({ users }) : res.status(404).json({ message: "Users not found"}))
        .catch((error) => res.status(500).json({ error }))
}


const deleteUser = (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId

    return User
        .findByIdAndDelete(userId)
        .then((user) => (user ? res.status(200).json({ message: "User Account Deleted"}) : res. status(404).json({ message: "User account not found" })))
        .catch((error) => res.status(500).json({ error }))
}


export default { createUser, getUserById, getAllUsers, deleteUser }