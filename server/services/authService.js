const jwt = require("jsonwebtoken");

class AuthService {
  generateToken(id, email, role) {
    const token = jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });
    return token;
  }
}

module.exports = new AuthService();
