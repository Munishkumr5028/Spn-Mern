const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const collegeRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/course.routes");
// const User = require("./models/authModel"); 

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB Connected");
    // await createAdminAccount(); // auto setup admin
  })
  .catch((err) => console.error(err));
  
app.use("/api/college", collegeRoutes);
app.use("/api/course", courseRoutes);

// async function createAdminAccount() {
//   try {
//     const existingAdmin = await User.findOne({
//       email: process.env.ADMIN_EMAIL,
//     });
//     if (!existingAdmin) {
//       const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
//       await User.create({
//         name: "Admin",
//         email: process.env.ADMIN_EMAIL,
//         password: hashedPassword,
//       });
//       console.log("✅ Admin account created");
//     } else {
//       console.log("✅ Admin account already exists");
//     }
//   } catch (error) {
//     console.error("❌ Error creating admin user:", error);
//   }
// }

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
