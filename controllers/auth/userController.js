

const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const UserModel = require('../../models/userModel');

// register


const registerUser =async(req,res)=>{
const {name,email,password}=req.body;



try{

    const checkUser=await myUser.findOne({email});

    if(checkUser) return res.json({success: 'false', message:
        'User Already Exist With the Same Email! Please Try Again '});


const hashPassword= await bcrypt.hash(password,12);
const newUser=  new UserModel({
    name,email,password:hashPassword

});

await newUser.save();

   return res.status(201).json({
    success:true,
    message:'Registration Successfully'
})

}catch(error){



return res.status(500).json({
    success:true,
    message:error
})

}

}

//login

const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try{

        const {email,password}=req.body
        if(!email){
            throw new Error('Email is Required')
        }
        
        if(!password){
            throw new Error('Password is Required')
        }

        const user= await UserModel.findOne({email})

        if(!user){

            throw new Error('User Not Found')
        }
        const checkPassword= await bcrypt.compare(password,user.password);

        console.log('checkPassword',checkPassword);

        if(checkPassword){

const tokenData={
id: user._id,
email:user.email,

      }
const token =
 await jwt.sign(      {
    id: checkUser._id,
    role: checkUser.role,
    email: checkUser.email,
    userName: checkUser.userName,
  },
  "CLIENT_SECRET_KEY",
  { expiresIn: "60m" });
const tokenOption={
    httpOnly:true,
    secure:true
}
res.cookie("token",token,tokenOption).status(200).json({

    message:"Login Success",
    data:token,
    success:true,
    error:false
})

      }else{
throw new Error('Please Check Password');

      } 
    
    
    
    
    }catch(error){


        res.json({message:error.message || error ,error:true,success:false})

    }
  };
  


//logout


//authMiddleware



module.exports={registerUser,
    loginUser};

