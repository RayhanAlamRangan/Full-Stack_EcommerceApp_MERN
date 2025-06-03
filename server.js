


const express =require('express');
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const cors=require('cors');
const dotenv =require('dotenv');
dotenv.config();
const app =express()
const authRouter=require('./routes/auth/authRoutes');


mongoose.connect("mongodb+srv://rangan801901:rangan801901@cluster0.jcqj5.mongodb.net/Ecommerce_App2025?retryWrites=true&w=majority&appName=Cluster0"
).then(()=>{
console.log('Database Connection Successfully')

}).catch((error)=>{
console.log(error);
})


app.use(express.json());
app.use(cookieParser())
app.use('/api/auth' , authRouter);
app.use(cors({ origin:'http://localhost:5173',
    methods:['GET','POST','DELETE', 'PUT' ],
    allowHeaders:[
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma"

    ],
    credentials:true}));
const port= process.env.PORT || 8778


app.listen(port,()=>{

    console.log('Server Running On PORT 8778');
})