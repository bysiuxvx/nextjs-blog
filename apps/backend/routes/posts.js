const router = require("express").Router()

let Post = require("../schemas/post")

router.route("/").get((req, res) => {
  Post.find()
    .then((posts) => {
      res.json(posts)
    })
    .catch((err) => res.status(400).json(`Error ${err}`))
})

router.route("/add").post((req, res) => {
  const title = req.body.title
  const text = req.body.text
  const hashtags = req.body.hashtags
  const createdBy = req.body.createdBy

  const newPost = new Post({ title, text, hashtags, createdBy })

  newPost
    .save()
    .then(() => res.json("New post has been created!"))
    .catch((err) => res.status(400).res.json(`Error ${err}`))
})

module.exports = router
