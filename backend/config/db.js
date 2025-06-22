import mongoose from 'mongoose';

 export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://dedeepyasssanjana:sanju123@cluster0.2sumw5p.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}


