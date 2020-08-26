const router = require("express").Router();
const Article = require("../models/Article");


router.param("id", (req, res, next, id) => {
  Article.findById(id).then((article) => {
    if (!article) {
      res.status(404).send("Article is not found!!")
    } else {
      req.article = article;
      return next();
    }  
  }).catch(next);
})


router.get("/", (req, res, next) => {
  console.log("Get request for all articles received...");
  // Article.find({}).select('title description') //get title and description of article
  // Article.find({}).select('-title') //get everything without title of article

  Article.find({})
    .sort({ createdAt: "desc" })
    .then(function (results) {
      return res.send(results);
    }).catch(next);
});


router.post("", (req, res, next) => {
  console.log(`Post request received...`);
  console.log(req.body);
  const article = new Article(req.body);
  article.save().then((result) => {
    return res.status(201).send(result);
  }).catch(next);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(`get request for article ${id} received...`);

  return res.status(200).send(req.article)
});

router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  console.log(`Update request for article ${id} received...`);

  Article.findByIdAndUpdate(req.article.id, req.body).then((article) => {
    res.status(200).send(article);
  }).catch(next);

});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  console.log(`Delete request for article ${id} received...`);

  Article.findByIdAndDelete(req.article.id).then((article) => {
    res.status(204).send(article);
  }).catch(next);
});

module.exports = router;
