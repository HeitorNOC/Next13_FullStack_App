import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect(process.env.MONGO ? process.env.MONGO : "")
  } catch (error) {
    throw new Error("Connection failed!")
  }
}

export default connect