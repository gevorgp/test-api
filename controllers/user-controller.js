const User = require('../models/Post')

async function getUser(req, res) {
    const posts = await User.find({}).lean()
    res.send(posts);
}

async function create(req, res) {
    try {
        const position = await new User({
            author_name: req.body.author_name,
            quote_text: req.body.quote_text
        }).save()
        await res.status(201).json(position)
    } catch (e) { console.log(e) }
}

async function deleteUser(req, res) {
    try {
        const user = await User.find({}).lean().deleteOne({ _id: req.params.id })
        return res.json({ user });
    }catch (e) { console.log(e) }
}

async function editUser(req, res) {

    let updatedPost = {
        author_name: req.body.author_name,
        quote_text: req.body.quote_text
    };

    try {
        await User.updateOne({ _id: req.params.id }, updatedPost, function(){
            res.send(200, updatedPost);
        });
    }catch (e) { console.log(e) }
}

module.exports = { create, getUser, deleteUser, editUser }
