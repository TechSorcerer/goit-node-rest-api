import { Router } from "express";

import {
  getCurrent,
  signin,
  signout,
  signup,
  updateAvatar,
  updateSubscription,
} from "../controllers/authControllers.js";
import validateBody from "../helpers/validateBody.js";

import {
  userSignupSchema,
  userSigninSchema,
  userUpdateSchema,
} from "../schemas/userSchemas.js";

import upload from "../middlewares/upload.js";

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
authRouter.patch(
  "/avatars",
  upload.single("avatarURL"),
  authenticate,
  updateAvatar
);

export default authRouter;
