import jwt from 'jsonwebtoken';
import Auth from '../modles/auth';

export const checkPermission = async(req, res, next) => {
    if(!req.headers.authorization){
        return res.status(404).json({
            message:'bạn chưa đăng nhập',
        })
    }
    const token = req.headers.authorization.split("")[1];
    jwt.verify(token,"123456",async(error,decoded) => {
        if (error ==="JsonWebTokenError") {
            return res.json({
                message:"Token không hợp lệ"
            })
        }
        const Auth = await Auth.findById(decoded.id);
        if (Auth.role !== "admin") {
            return res.status(404).json({
                message: "Bạn không có quyền truy cập tài nguyên này",
            });
        }
        req.Auth = Auth;
        next();
    });
}
