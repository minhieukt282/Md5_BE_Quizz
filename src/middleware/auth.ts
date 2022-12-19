import jwt from "jsonwebtoken";

export let SECRET = '19!12'
let USER = 'user'
let ADMIN = 'admin'
export const auth = (req, res, next) => {
    let authorization = req.headers.authorization
    if (authorization) {
        let accessToken = authorization.split(' ')[1]
        if (!accessToken) {
            res.status(401).json({
                message: "You are anonymous 1"
            })
        } else {
            jwt.verify(accessToken, SECRET, (err, data) => {
                if (err) {
                    res.status(401).json({
                        message: "You are anonymous 2"
                    })
                } else {
                    if (data.role === USER) {
                        req.decode = data
                        next()
                    } else if (data.role === ADMIN) {
                        req.decode = data
                        next()
                    } else {
                        res.status(401).json({
                            message: "You are anonymous 3"
                        })
                    }
                }
            })
        }
    } else {
        res.status(401).json({
            message: "You are anonymous 5"
        })
    }

}