import express from "express"
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let blogPosts = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/about", (req, res) => {
    res.render("about.ejs");
})

app.get("/add", (req, res) => {
    res.render("add.ejs");
})

app.get("/view", (req, res) => {
    res.render("view.ejs", { postNumber: req.query.post });
})

app.get("/view1", (req, res) => {
    res.render("view1.ejs", { blogPosts, indexValue: req.query.i });
})


app.post("/submit", (req, res) => {
    const { heading, message } = req.body;

    // Create a new blog post object
    const newBlogPost = {
        heading,
        message
    };

    const indexValue = req.query.i;
    // Add the new blog post to the array
    blogPosts.push(newBlogPost);

    // Redirect the user back to the home page
    res.render("index.ejs", {blogPosts});
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });


