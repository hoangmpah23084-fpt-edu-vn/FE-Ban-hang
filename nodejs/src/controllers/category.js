import Category from "../modles/category";
import { categorySchema } from "../validate/category";



export const create = async (req, res) => {
    try {
        const { error } = categorySchema.validate(req.body, { abortEarly: false })
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(404).json({
                errors: errors
            })
        }
        const data = await Category.create(req.body);
        if (data.length === 0) {
            return res.status(200).json({
                message: "Không thêm được danh mục",
            });
        }
        return res.status(200).json({
            message: "Thêm danh mục thành công",
            data,
        });


    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });

    }
}


