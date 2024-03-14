const jwt = require('jsonwebtoken')
require('dotenv').config()

const jwtAuthorization = async (req, res, next) => {
    const authorizationHeader = req.header("Authorization")

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
        return res.status(401)
            .json({ error: "No Header was present", message: "Invalid authorization header" });
    }
    const token = authorizationHeader.replace("Bearer ", "");
    if (!token) {
        return res.status(401).json({ error: "No Token was present", message: "Authorization token not found" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        // console.log(decoded)
        req.user_email = decoded.email;
        req.user_level = decoded.level;
        next();
      } catch (err) {
        console.log(err);
        return res.status(401).json({ error: "error", message: "Invalid token" });
      }

}

module.exports = jwtAuthorization;