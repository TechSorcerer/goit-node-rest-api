import Joi from "joi";
import { emaiIRegexp, subscriptionsList } from "../constants/user-constants.js";

export const userSignupSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emaiIRegexp).required(),
  subscription: Joi.string(),
});

export const userSigninSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emaiIRegexp).required(),
});

export const userUpdateSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionsList)
    .required(),
});
