const { Contact } = require("../../models/contacts.model")

// const listContacts = async (req, res) => {
//     const { _id: owner } = req.user;
//     const result = await Contact.find({ owner }, "-createdAt -updatedAt")
//         .populate("owner", "name email");
//     res.json(result)
// }


// const paginate = require('mongoose-paginate');

// const listContacts = async (req, res) => {
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 20;
//     const options = {
//         page,
//         limit,
//         sort: { author: 1 },
//     };

//     const result = await Contact.paginate({}, options);
//     res.json(result);
// }

const listContacts = async (req, res) => {
    const { _id: owner } = req.user;
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    const result = await Contact.find({ owner }, "-createdAt -updatedAt", { skip, limit }).populate("owner", "name email");
    res.json(result);
}


// const listContacts = async (req, res) => {
//    const favorite = req.query.favorite;

//   const filter = {};

//   if (favorite !== undefined) {
//     filter.favorite = favorite;
//   }

//   const contacts = await Contact.find(filter);
//     res.json(contacts);
// }



module.exports = listContacts;