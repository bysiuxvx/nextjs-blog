const router = require("express").Router()

let Post = require("../schemas/post")

router.route("/").get((req, res) => {
  Post.find()
    .then((posts) => {
      res.json(posts)
    })
    .catch((err) => res.status(400).json(`Error ${err}.`))
})

router.route("/add").post((req, res) => {
  const title = req.body.title
  const shortDescription = req.body.shortDescription
  const text = req.body.text
  const hashtags = req.body.hashtags
  const createdBy = req.body.createdBy

  const newPost = new Post({
    title,
    text,
    hashtags,
    createdBy,
    shortDescription,
  })

  newPost
    .save()
    .then(() => res.json("New post has been created!"))
    .catch((err) => res.status(400).res.json(`Error ${err}.`))
})

router.route("/:id").get((req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json(`Error ${err}.`))
})

router.route("/:id").delete((req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json("Post has been deleted."))
    .catch((err) => res.status(400).json(`Error ${err}.`))
})

router.route("/edit/:id").post((req, res) => {
  Post.findById(req.params.id).then((post) => {
    post.title = req.body.title
    post.shortDescription = req.body.shortDescription
    post.text = req.body.text
    post.hashtags = req.body.hashtags
    post.createdBy = req.body.createdBy

    post
      .save()
      .then(() => res.json(`Post has been edited.`))
      .catch((err) => res.status(400).json(`Error ${err}.`))
  })
})

module.exports = router
