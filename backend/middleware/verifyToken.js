import jwt from "jsonwebtoken";
//verifying the user function
export const verifyToken = (req, res, next) => {
	const token = req.cookies.token;
	if (!token) return res.status(401).json({ success: false, message: "Unauthorized - no token provided" });
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) return res.status(401).json({ success: false, message: "Unauthorized - invalid token" });

		req.userId = decoded.userId;
		next();
	} catch (error) {
		console.log("Error in verifyToken ", error);
		return res.status(500).json({ success: false, message: "Server error" });
	}
};

export const adminRoute=(req,res,next)=>{
  if(req.userId && req.user.role === "admin"){
    next();
  }else{
    return res.status(403).json({message:"Access denied - Admin only"})
  }
}