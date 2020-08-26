const router = require("express").Router();
const User = require("../models/User.js");
const Article = require("../models/Article.js");

router.param("id", (req, res, next, id) => {
    User.findById(id)
    .then((user) => {
        console.log(id);
        if (!user) {
            res.status(404).send("User not found");
        } else {
             req.user = user;
             return next();
        }
    }).catch(next);
})

router.get("/", (req, res, next) => {
    User.find({})
    // .select("username")
    .sort({ createdAt: "desc" })
    .then((users) => { 
        return res.status(200).send(users)
    }).catch(next);
})


router.post("", (req, res, next) => {
    const user = new User(req.body);
    user.save().then((result) => {
        return res.status(201).send(result);
    }).catch(next);
});



router.get("/:id", (req, res, next) => {
    const id = req.params.id;
    console.log(`get request for user ${id} received...`)

    return res.status(200).send(req.user);
})


router.put("/:id", (req, res, next) => {
    User.findByIdAndUpdate(req.user.id, req.body).then((result) => {
        return res.status(200).send(result)
    }).catch(next);
})

router.delete("/:id", (req, res, next) => {
    User.findByIdAndDelete(req.user.id).then((result) => {
        res.status(200).send()
    })
})


// User's Articles

router.get("/:id/articles", (req, res, next) => {
    Article.find({author: "5f46ed819d4d4c0c76ab60f8"})
    .sort({createdAt: "desc"})
    .then((articles) => {
        return res.status(200).send(articles)
    }).catch(next);
});

router.post("/:id/articles", (req, res, next) => {
    const article = new Article(req.body);
    article.author = req.user.id
    article.save().then((article) => {
        if(!req.user.articles) {
            req.user.articles = [];
        }
        req.user.articles.push(article);
        req.user.save().then((user) => {
            return res.status(201).send(user);
        });
    }).catch(next)
})

module.exports = router


    
// // The specific endpoint need to be top
// router.get("/fixed-parameter", (req, res, next) => {
//     console.log("Fixed parameter endpoing reached, but gonna do anything. Next");
//     next();
// })

// router.get("/:thing", (req, res, next) => {
//     res.send(req.params.thing)
// })

// router.get("/:thingOne/:thingTwo", (req, res, next) => {
//     res.send({
//         thing_one: req.params.thingOne,
//         thing_two: req.params.thingTwo,
//     })
// })