


const  JWT_SECRET  = "shivam@123";
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, nxt) => {
    const authHeader = req.headers.authorization;

   

    try {
        const decoded = jwt.verify(authHeader, JWT_SECRET);

        req.userId =  JSON.parse(decoded) ;
        

        nxt();
    } catch (err) {
        return res.json({
            msg:"bad authorization",
            status:403
        });
    }
   

    
};

module.exports = {
    authMiddleware
}