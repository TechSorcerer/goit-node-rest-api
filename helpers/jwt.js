import jwt from "jsonwebtoken";

// const { JWT_SECRET } = process.env;
export const createToken = (payload) =>
  // jwt.sign(payload, JWT_SECRET, { expiresIn: "24h" });
  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "24h" });

export const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return { data: payload };
  } catch (error) {
    return { error };
  }
};
