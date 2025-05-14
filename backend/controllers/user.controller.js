import { generateTokenAndSetCookie, generateVerificationCode } from "../utils/generateVerificationCode.js"
import { User } from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { sendPasswordResetEmail, sendResetSuccessEmail, sendVerificationEmail, sendWelcomeEmail, subscribeToNewsLetter } from "../mailtrap/emails.js"
import crypto from 'crypto'

//signup controller
export const signup=async(req,res)=>{
    const {username,email,password}=req.body
    try {
        if(!email || !username || !password){
            return res.status(400).json({message:"All fields are required"})
        }
        const userAlreadyExist = await User.findOne({email});
        if(userAlreadyExist){
            return res.status(200).json({success:false,message:"User already exist"})
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const verificationToken =generateVerificationCode(); //six digit verification code
        const user = new User({
            email,
            password:hashedPassword,
            username,
            verificationToken,
            verificationTokenExpiresAt:Date.now() + 24*60*60*1000 //24 hrs from now
        });

        await user.save();

        generateTokenAndSetCookie(res,user._id);
        
        await sendVerificationEmail(user.email,verificationToken)

        res.status(201).json({
            success:true,
            message:"User created successfully",
            user:{
                ...user._doc,
                password:undefined
            }
        })
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}

//login controller
export const login=async(req,res)=>{
    const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ success: false, message: "Invalid credentials" });
		}
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(400).json({ success: false, message: "Invalid credentials" });
		}

		generateTokenAndSetCookie(res, user._id);

		user.lastLogin = new Date();
		await user.save();

		res.status(200).json({
			success: true,
			message: "Logged in successfully",
			user: {
				...user._doc,
				password: undefined,
			},
		});
	} catch (error) {
		console.log("Error in login ", error);
		res.status(400).json({ success: false, message: error.message });
	}
}

//logout controller
export const logout=async(req,res)=>{
    res.clearCookie("token");
    res.status(200).json({success:true,message:"Logged out successfullly"})
}

//verifyemail controller
export const verifyEmail=async(req,res)=>{
    const {code}=req.body
    try {
        const user = await User.findOne({
            verificationToken:code,
            verificationTokenExpiresAt:{$gt:Date.now()}//we check to see if the token is not expired
        })
        if(!user){
            return res.status(400).json({success:false,message:"Invalid or expired verification code"})
        }

        user.isVerified=true;
        user.verificationToken=undefined;
        user.verificationTokenExpiresAt=undefined;
        await user.save();

        await sendWelcomeEmail(user.email,user.username);

        return res.status(200).json({
            success:true,
            message:"Email verified successfully",
            user:{
                ...user._doc,
                password:undefined
            }
        })
    } catch (error) {
         res.status(400).json({success:false,message:error.message})
    }
}

//forgotpassword controller
export const forgotPassword=async(req,res)=>{
     const {email}=req.body;
     try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({success:false,message:"User does not exist"})
        }

        const resetToken= crypto.randomBytes(20).toString("hex");
        const resetPasswordExpiresAt= Date.now() + 1*60*60*1000 //1hr

        user.resetPasswordToken=resetToken;
        user.resetPasswordExpiresAt=resetPasswordExpiresAt;

        await user.save();

        //now as soon as user receives email we need a link to the frontend to reset password
        await sendPasswordResetEmail(user.email,`${process.env.CLIENT_URL}/reset-password/${resetToken}`);
        return res.status(200).json({
            success:true,
            message:"Password reset link sent to your email"
        })
     } catch (error) {
        console.log("Error in forgot password",error);
        res.status(400).json({success:false, message:error.message})
     }
}

//resetPassword controller
export const resetPassword=async(req,res)=>{
     const {password}=req.body;
     const {token}=req.params;
     try {
        const user = await User.findOne({
            resetPasswordToken:token,
            resetPasswordExpiresAt:{$gt:Date.now()}
        });

        if(!user){
            return res.status(400).json({success:false,message:"Invalid or expired reset token"})
        }

        //update password
        const hashedPassword=await bcrypt.hash(password,10);
        user.password=hashedPassword;
        user.resetPasswordToken=undefined;
        user.resetPasswordExpiresAt=undefined;
        
        await user.save();

        await sendResetSuccessEmail(user.email);

        return res.status(200).json({success:true, message:"Password reset successful"});
     } catch (error) {
        console.log("Error in resetPassword",error);
        res.status(400).json({success:false, message:error.message})
     }
}

//checking user controller
export const checkAuth = async (req, res) => {
	try {
		const user = await User.findById(req.userId).select("-password");
		if (!user) {
			return res.status(400).json({ success: false, message: "User not found" });
		}

		res.status(200).json({ success: true, user });
	} catch (error) {
		console.log("Error in checkAuth ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};

//newsletter controller
export const newsLetter=async(req,res)=>{
    const {email}=req.body;
     if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email address.",
    });
  }
    try {
        await subscribeToNewsLetter(email);
        return res.status(200).json({
            message:"Subscribe to newsletter"
        })
    } catch (error) {
        console.log("Error in newsletter ", error);
		res.status(400).json({ success: false, message: error.message });
    }
}