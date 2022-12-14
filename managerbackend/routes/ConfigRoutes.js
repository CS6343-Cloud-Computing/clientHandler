import { Router } from "express";
const router = Router();

router.post("/register", async (req, res) => {
  try {
    let foundUser = User.findOne({ where: { username: req.body.username } });
    if (!foundUser) {
      let hashPassword = await bcrypt.hash(req.body.password, 10);

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

      const passwordMatch = await bcrypt.compare(submittedPass, storedPass);
      if (passwordMatch) {
        let usrname = foundUser.username;
      } else {
      }
    } else {
      res.send();
    }
  } catch {
    res.send("Internal server error");
  }
});

app.post("/api/config/upload", upload.single("file"), (req, res, next) => {
  const file = req.file;
  console.log(file);
  if (!file) {
    console.log("hi");
    const error = new Error("No File");
    error.httpStatusCode = 400;
    return next(error);
  }
  const filename = file.filename;
  let fileContents = fs.readFileSync('./uploads/' + filename, 'utf8');
  let data = yaml.load(fileContents);
  console.log(data);
  let newUserConfig = {
    userName: data.userName,
    workflowName: data.workflowName,
    dataType: data.dataType,
    dataSource: data.dataSource,
    workflowComponents: data.workflowComponents
  };
  UserConfig.create(newUserConfig);
  res.send(file);
});

export default router;
