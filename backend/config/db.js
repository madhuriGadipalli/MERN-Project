import mongoose from "mongoose";
const uri =
  "mongodb+srv://user1:user1@myshop.oappfea.mongodb.net/MyShop?retryWrites=true&w=majority";
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`mongo db connected:${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`error:${error.message}`.red);
  }
};

export default connectDb;
