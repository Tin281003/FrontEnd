const express = require("express");
const Parser = require("rss-parser");
const axios = require("axios");

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get("/cong-nghe", async (req, res) => {
    const parser = new Parser();
    try {
        const feed = await parser.parseURL("https://baotintuc.vn/khoa-hoc-cong-nghe.rss");
        const modifiedFeed = await Promise.all(
            feed.items.map(async (item) => {
                if (item.content) {
                    const { data } = await axios.get(item.content);
                    item.content = data.replace(/<[^>]+>/g, "");
                }
                console.log(item);
                return item;
            })
        );
        res.json(modifiedFeed);
    } catch (error) {
        res.status(500).json({ type: "error", message: error.message });
    }
});

const PORT = process.env.PORT || 4050;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
