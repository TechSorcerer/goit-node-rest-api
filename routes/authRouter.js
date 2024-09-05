import { Router } from "express";

import {
  getCurrent,
  signin,
  signout,
  signup,
  updateSubscription,
} from "../controllers/authControllers.js";
import validateBody from "../helpers/validateBody.js";

import {
  userSignupSchema,
  userSigninSchema,
  userUpdateSchema,
} from "../schemas/userSchemas.js";

import authenticate from "../middlewares/authenticate.js";

const signupValidation = validateBody(userSignupSchema);
const signinValidation = validateBody(userSigninSchema);
const updateValidation = validateBody(userUpdateSchema);

const authRouter = Router();

authRouter.post("/signup", signupValidation, signup);
authRouter.post("/signin", signinValidation, signin);
authRouter.get("/corrent", authenticate, getCurrent);
authRouter.post("/signout", authenticate, signout);
authRouter.patch("", authenticate, updateValidation, updateSubscription);

export default authRouter;
