import { User } from "../models/user.js";

export const postUserRegister = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        await User.create({ name, email, password });
        // {201} means created
        // res.cookie("token", "JHKJ123165");
        res.status(201).cookie("token", "JHKJ123165").json({
            success: "true",
            message: "Registered Successfully"
        });
    } catch (error) {
        console.log(error);
    }
};

export const getAllUser = async(req, res) => {  
    const users = await User.find();
    // console.log(req.query); // { keyword: 'keval', category: 'framework', page: '3' }
    res.json({
        success: true,
        users
    });
};

export const postUserLogin = async (req,res, next) => {
    
};


export const getUserData = async (req, res) => {
    console.log(req);
    const { id } = await req.params;
    const user = await User.findById(id);
    console.log(id);
    res.json({
        success: true,
        user
    });
};

// export const getUserId = async(req, res) => {
//     const {id} = await req.body;
//     const user = await User.findById(id);
//     console.log(req.body);
//     res.json({
//         success: true,
//         user
//     });
// };

// export const getUId = async(req, res) => {
//     res.json({
//         success: true,
//         user : {}
//     });
// };

// export const updateUser = async (req, res) => {
//     const { id } = await req.params;
//     const user = await User.findById(id);
//     console.log(id);


//     res.json({
//         success: true,
//         user : "User data updated successfully"
//     });
// };

// export const deleteUser = async (req, res) => {
//     const { id } = await req.params;
//     const user = await User.findById(id);
//     console.log(user);

//     await User.deleteMany(user);
//     // await user.remove;

//     res.json({
//         success: true,
//         user : "User data deleted successfully"
//     });
// };





