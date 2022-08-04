import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";



import productRoutes from "./routes/products.routes.js";
import usersRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";

import { createRoles, createAdmin} from "./libs/initialSetup.js";

const app = express();
createRoles();
createAdmin();

// Settings

app.set("port", process.env.PORT || 4000);
 app.set("json spaces", 4); 



// Middlewares
const corsOptions = {
  // origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Welcome Routes
app.get("/", (req, res) => {

  
    res.json({
    message: "Welcome to my Products API"
  }); 

});

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

export default app;
