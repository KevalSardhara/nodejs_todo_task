
import express from "express";
import {User} from "../models/user.js";

const router = express.Router();

// router use to make the comman name API params defind vary easy formF
router.post("/new", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        await User.create({ name, email, password });
        // await User.create({
        //     name : "Keval",
        //     email : "kevalsardhara7@gmail.com",
        //     password : "1234"
        // });

        // {201} means created
        res.cookie("token", "JHKJ123165");
        res.status(201).json({
            success: "true",
            message: "Registered Successfully"
        });
    } catch (error) {
        console.log(error);
    }
});

router.get("/all", async(req, res) => {
    const users = await User.find();
    // query based formate
    // res.json(users);
    // http://127.0.0.1:5000/users/all?keyword=keval&category=framework&page=3
    // console.log(req.query); // { keyword: 'keval', category: 'framework', page: '3' }
    res.json({
        success: true,
        users
    });
});


router.get("/userId", async(req, res) => {
    const {id} = await req.body;
    const user = await User.findById(id);
    console.log(req.body);
    res.json({
        success: true,
        user
    });
});

// dynemic route, write in last in code and make the best here
router.get("/uId", async(req, res) => {
    // const {uId} = await req.body;
    // const {uId} = await req.query;
    // console.log(req);
    // const {uId} = await req.params;
    // const user = await User.findById(uId);
    // console.log(uId);
    res.json({
        success: true,
        user : {}
    });
});

router.get("/:uId", async(req, res) => {
    // const {uId} = await req.body;
    // const {uId} = await req.query;
    console.log(req);
    const {uId} = await req.params;
    const user = await User.findById(uId);
    console.log(uId);
    res.json({
        success: true,
        user
    });
});



export default router;