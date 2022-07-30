import mongoose from "mongoose";
import config  from "./config";

mongoose.
    connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  /*   useCreateIndex: true, */
})

.then((db)=> console.log(`Db is connected`))
.catch((err)=> console.log(err));