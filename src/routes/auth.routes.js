import { Router } from "express";
const router = Router();

import * as authCtrl from "../controllers/auth.controller";
import { verifySignup } from "../middlewares";


router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});



router.get("/",(req,res)=>{
 
})

router.post(
  "/signup",
  [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted],
  authCtrl.signUp
  

);

router.get("/signup",(req,res)=>{


})


router.post("/signin", authCtrl.signin);


router.get("/signin",(req,res)=>{

})


router.get("/home",(req,res)=>{

})



export default router;
