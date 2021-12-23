const app = require("../index");
const config = require("./config");
const jwt = require("jsonwebtoken");
const { use } = require("../index");
app.post("/signin", async (req, res) => {
  console.log(req.body)


  try {
    const { username, password } = req.body;

    const [user] = await app.db
      .from("compte")
      .select("*")
      .where("compte.cin", req.body.username)

    console.log(user.password)
    if (!user) {
      res.status(404).send({ notice: "User Not Found" });
    } else {
      //const passwordIsValid= await verify(user.password, password);
      const passwordIsValid = user.password == password;

      if (!passwordIsValid) {
        res.status(401).send({
          accessToken: null,
          notice: "Invalid Password!",
        });
      } else {



        const token = jwt.sign(
          {
            id: user.id, firstname: user.firstname,
            lastname: user.lastname,
            cin: user.cin,
            rib: user.rib
          },
          config.secret
        );
        res.status(200).send({
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          rib: user.rib,
          accessToken: token,
        });

      }
    }
  } catch (err) {

    res.status(500).send({ message: err.message });
  }
});
