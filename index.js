import express from 'express';
import mongoose, { Schema } from 'mongoose';
import 'dotenv/config'
const app = express()
app.use(express.json());

const usersSchema = new Schema({
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: String,
    age: Number,
    isMarried: Boolean,
});

const usersModel = mongoose.model('users', usersSchema);

app.get('/', async (req, res) => {
    try {
        const user = await usersModel.find({})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json("")
    }
})

app.get('/:id', async (req, res) => {
    const { id } = req.params
    const user = await usersModel.findById(id)
    res.send(user)
})

app.post('/', async (req, res) => {
    try {
        const { username, email, password, age, isMarried } = req.body
        const newUser = new usersModel({ username, email, password, age, isMarried });
        await newUser.save();
        res.send('User Added')
    } catch (error) {
        res.send(error.message)
    }
})

app.put('/:id', async (req, res) => {
    const { id } = req.params
    const { username, email, password, age, isMarried } = req.body
    const user = await usersModel.findByIdAndUpdate(id, { username, email, password, age, isMarried })
    res.send(user)
})


app.delete('/:id', async (req, res) => {
    const { id } = req.params
    const user = await usersModel.findByIdAndDelete(id)
    res.send(user)
})

mongoose.connect(process.env.KEY)
    .then(() => console.log('Connected!'))
    .catch(error => console.log(error.message))


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})



