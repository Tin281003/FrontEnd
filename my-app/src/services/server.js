const express = require("express");
const RSSParser = require("rss-parser");
const app = express();
const parser = new RSSParser();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get("/rss", async (req, res) => {
    try {
        const { url } = req.query;
        if (!url) {
            return res
                .status(400)
                .json({ type: "error", message: "URL is required" });
        }

        const feed = await parser.parseURL(url);
        res.json(feed);
    } catch (error) {
        res.status(500).json({ type: "error", message: error.message });
    }
});

const PORT = process.env.PORT || 4050;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
