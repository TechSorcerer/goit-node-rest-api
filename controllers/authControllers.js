import * as authServices from "../services/authServices.js";

export const signup = async (req, res) => {
  const newUser = await authServices.signup(req.body);

  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription,
  });
};

export const signin = async (req, res) => {
  const { token, email, subscription } = await authServices.signin(req.body);

  res.json({
    token,
    user: {
      email: email,
      subscription: subscription,
    },
  });
};

export const getCurrent = (req, res) => {
  const { email, subscription } = req.user;

  res.json({
    email: email,
    subscription: subscription,
  });
};

export const signout = async (req, res) => {
  const { _id } = req.user;

  await authServices.updateUser({ _id }, { token: "" });

  res.json({
    message: "Logout success",
  });
};

export const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const { subscription: selectedPlan } = req.body;
  const updatedData = await authServices.updateUser(
    { _id },
    { subscription: selectedPlan }
  );

  res.json({
    message: "Subscription was updated",
    user: {
      email: updatedData.email,
      subscription: updatedData.subscription,
    },
  });
};
