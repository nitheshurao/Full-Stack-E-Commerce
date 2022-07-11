import jwt from "jsonwebtoken"


const generateTogen = (id) => {
    return jwt.sign({ id }, process.env.JWT_S, {
        expiresIn: '30d'
    })
}

export default generateTogen