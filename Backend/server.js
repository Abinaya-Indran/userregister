const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDB = require("../Backend/datbase");
const userRoutes = require("../Backend/Routes/UserRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json()); // Parse JSON requests

app.use("/api/users", userRoutes); // User routes
app.use("/api/products", require("./Routes/ProductRoutes"));
app.use("/api/orders", require("./Routes/OrderRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
