const express = require("express");
const Parser = require("rss-parser");
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get("/home", (req, res) => {
    const parser = new Parser();
    parser.parseURL("https://baotintuc.vn/tin-moi-nhat.rss", (error, feed) => {
        if (error) {
            return res.status(500).json({ type: "error", message: error.message });
        }
        res.json(feed);
    });
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
