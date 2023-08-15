const getCurrent = async (req, res) => {
    const { name, email } = req.user;

    res.json({
        name,
        email,
    })
}





// const getCurrent = async (req, res) => {
//     const { email, subscription } = req.user;

//     res.json({
//         email,
//         subscription,
//     })
// }

module.exports = getCurrent;