import { Router } from "express";
const router = Router();
import { hash, compare } from "bcrypt";

// Add user import here

router.post("/register", async (req, res) => {
  try {
    let foundUser = User.findOne({ where: { username: req.body.username } });
    if (!foundUser) {
      let hashPassword = await hash(req.body.password, 10);

      let newUser = {
        username: req.body.username,
        password: hashPassword,
      };

      User.create(newUser);

      res.status(200).send({ message: "user created" });
    } else {
      res.status(201).send({ message: "user already exists" });
    }
  } catch {
    res.status(400).json("404 - no user exists in db to update");
  }
});

router.post("/login", async (req, res) => {
  try {
    const foundUser = await User.findOne({
      where: { username: req.body.username },
    });
    if (foundUser) {
      let submittedPass = req.body.password;
      let storedPass = foundUser.password;

      const passwordMatch = await compare(submittedPass, storedPass);
      if (passwordMatch) {
      } else {
      }
    } else {
      res.send();
    }
  } catch {
    res.send("Internal server error");
  }
});

export default router;
