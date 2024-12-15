import express from "express";
const router = express.Router();

const users = [
    {
        firstName:"john",
        lastName:"doe",
        age: 25
    },
    {
        firstName:"abdi",
        lastName:"chala",
        age: 23
    },
]

router.get('/', (req, res) =>{
    console.log(users);
    res.send(users);
});

router.post('/', (req, res) =>{
    console.log('POST ROUTE REACHED');
    res.send('POST ROUTE REACHED');

});

export default router;