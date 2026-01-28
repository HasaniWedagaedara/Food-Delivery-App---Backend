import mongoose from 'mongoose';


export const connectDB = async () => {
    await mongoose
      .connect(
        'mongodb+srv://hasanimadhumali:19991213@cluster0.hto3j3r.mongodb.net/food-delivery-app')
      .then(() => console.log("DB connected"));
}

