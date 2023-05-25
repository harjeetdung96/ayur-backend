const authCheck = (permission) => {
    return (req, res, next) => {
        // const userRole = req.body.role
        res.send(200, { response: '22' })
    }

}

module.exports = { authCheck }