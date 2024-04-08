import { addUser, findUser } from "../services/userService.js";
import jwt from "jsonwebtoken";
export const createUser = async (req, res, next) => {
    if (!req?.body?.name || !req?.body?.password || !req?.body?.email) {
        res.send({
          error: "Please provide all the require fields name, email and password",
        });
        return;
      }
      const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };
      await addUser(user);
      const jwtOptions = {
        expiresIn: "30d", // Expiry set to 30 days
      };
      const token = jwt.sign(user, "xtra", jwtOptions);
      res.cookie("token", token, { maxAge: 3600000 });
      res.send({ token: token });
};

export const loginUser = async (req, res, next) => {
    if (!req?.body?.password || !req?.body?.email) {
        res.send({
          error: "Please provide all the require fields name, email and password",
        });
        return;
      }
      const user = {
        email: req.body.email,
        password: req.body.password,
      };
      const userDetails = await findUser(req.body.email, req.body.password);
      console.log("userDetails", userDetails);
      if (!userDetails) {
        res.send({ error: "No related user found" });
        return;
      }
    
      const jwtOptions = {
        expiresIn: "30d", // Expiry set to 30 days
      };
      const token = jwt.sign(userDetails, "xtra", jwtOptions);
      res.cookie("token", token, { maxAge: 3600000 });
      console.log(token);
      res.send({ token: token });
};