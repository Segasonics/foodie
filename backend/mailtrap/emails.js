import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"
import { mailtrapClient, sender } from "./mailtrap.config.js"

//verification email function
export const sendVerificationEmail=async(email,verificationToken)=>{
    const recipients=[{email}]

    try {
       const response = await mailtrapClient.send({
             from:sender,
             to:recipients,
             subject:"Verify your email",
             //replacing the text verificationcode to verification token in emailtemplates.js
             html:VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
             category:"Email verification"
        })
        console.log("Email sent successfully",response)
    } catch (error) {
        console.error(`Error sending email: ${error}`)
        throw new Error(`Error sending email: ${error}`)
    }
}

// sending welcome email method
export const sendWelcomeEmail=async(email,name)=>{
    const recipients=[{email}]
    try {
        const response=await mailtrapClient.send({
            from:sender,
            to:recipients,
            template_uuid: "ca433d04-ef77-4f7c-b133-451f777e0654",
            template_variables: {
            company_info_name: "Auth Company",
            name: name
    }
    })
    console.log("Welcome email sent successfully",response)
    } catch (error) {
        console.error(`Error sending welcome email: ${error}`)
        throw new Error(`Error sending welcome email: ${error}`)
    }
}

//sending password reset email with token and url
export const sendPasswordResetEmail=async(email,resetURL)=>{
    const recipients =[{email}];

    try {
        const response= await mailtrapClient.send({
            from:sender,
            to:recipients,
            subject:"Reset your password",
            html:PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",resetURL),//replace the html a link with actual value
            category:"Password Reset"
        });
        console.log("Pasword reset email sent successfully",response)
    } catch (error) {
        console.error(`Error sending password reset email :${error}`)
        throw new error(`Error sending password reset email: ${error}`)
    }
}

//sending password reset success email
export const sendResetSuccessEmail=async(email)=>{
    const recipients =[{email}];
     try {
        const response= await mailtrapClient.send({
            from:sender,
            to:recipients,
            subject:"Password reset successful",
            html:PASSWORD_RESET_SUCCESS_TEMPLATE,//replace the html a link with actual value
            category:"Password Reset"
        });
        console.log("Pasword reset  successfully",response)
    } catch (error) {
        console.error(`Error sending password reset success email :${error}`)
        throw new error(`Error sending password reset success email: ${error}`)
    }
}