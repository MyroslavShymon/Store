const bcrypt = require("bcrypt");
const ApiError = require("../error/ApiError");
const { User, Bascket } = require("../models/models");
const authService = require("../services/authService");

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("Incorrect email and password"));
    }
    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      return next(ApiError.badRequest("This email is already exist"));
    }

    const hashedPassword = await bcrypt.hash(password, 4);
    const user = await User.create({ email, role, password: hashedPassword });
    // const bascket =
    await Bascket.create({ userId: user.id });
    authService.generateToken(user.id, email, role);

    return res.json({ token });
  }
  async login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return next(ApiError.internal("User with this email don't exist"));
    }

    console.log("user", user);
    const isEquel = bcrypt.compareSync(password, user.password);
    if (!isEquel) {
      return next(ApiError.internal("Password are not equels"));
    }
    const token = authService.generateToken(user.id, user.email, user.role);
    return res.json({ token });
  }
  async check(req, res) {
    // console.log("res.user", res.user);
    // const token = authService.generateToken(res.user)
    // return {
    //   id: req.user.id,
    //   email: req.user.email,
    //   role: req.user.role,
    // };
    const token = authService.generateToken(
      req.user.id,
      req.user.email,
      req.user.role
    );
    return res.json({ token });
  }
}

module.exports = new UserController();
