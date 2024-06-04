// const mongoose = require("mongoose");
// const mongoURI = `mongodb+srv://vidhi:${process.env.pass}@cluster0.9wbeuo5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// const connectToMongo = async () => {
//   try {
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB successfully");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };

// module.exports = connectToMongo;


const mongoose = require("mongoose");
const mongoURI = `mongodb+srv://vidhi:${process.env.pass}@cluster0.9wbeuo5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


console.log(`password ${process.env.pass}`);
const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;
