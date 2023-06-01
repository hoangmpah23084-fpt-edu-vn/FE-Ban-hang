import Auth from "../modles/auth";
import bcrypt from "bcryptjs";
import { signupSchema } from "../validate/auth";
import jwt  from "jsonwebtoken";

export const signup = async (req, res) => {
    try {
        const { error } = signupSchema.validate(req.body, { abortEarly: false })
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(404).json({
                errors: errors
            })
        }
        const checkEmail = await Auth.findOne({ email: req.body.email })
        if (checkEmail) {
            return res.status(400).json({
                message: "Email đã tồn tại",
            })
        }

        const checkPass = await bcrypt.hash(req.body.password, 10)
        const user = await Auth.create({
            name: req.body.name,
            email: req.body.email,
            password: checkPass,
        })

        user.password = undefined

        const token = jwt.sign({ id: user.id }, "123456", { expiresIn: "7d" })

        return res.status(200).json({
            message: "Tạo tài khoản thành công",
            accessToken: token,
            user
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
}