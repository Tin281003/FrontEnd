const express = require("express");
const Parser = require("rss-parser");
const cheerio = require("cheerio");
const { default: axios } = require("axios");
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

app.get("/thoi-su", async (req, res) => {
    try {
        const parser = new Parser();
        const feed = await parser.parseURL("https://baotintuc.vn/thoi-su.rss");
        res.json(feed);
    } catch (error) {
        res.status(500).json({ type: "error", message: error.message });
    }
});

app.get("/the-gioi", async (req, res) => {
    try {
        const parser = new Parser();
        const feed = await parser.parseURL("https://baotintuc.vn/the-gioi.rss");
        res.json(feed.items.slice(0, 10));
    } catch (error) {
        res.status(500).json({ type: "error", message: error.message });
    }
});

app.get("/gioi-tre", async (req, res) => {
    try {
        const parser = new Parser();
        const feed = await parser.parseURL("https://baotintuc.vn/xa-hoi.rss");
        res.json(feed.items.slice(0, 10));
    } catch (error) {
        res.status(500).json({ type: "error", message: error.message });
    }
});

app.get("/tin-24h", async (req, res) => {
    try {
        const parser = new Parser();
        const feed = await parser.parseURL("https://baotintuc.vn/tin-nong.rss");
        res.json(feed.items.slice(0, 10));
    } catch (error) {
        res.status(500).json({ type: "error", message: error.message });
    }
});

//DU LỊCH
app.get("/van-hoa", async (req, res) => {
    try {
        const parser = new Parser();
        const feed = await parser.parseURL("https://baotintuc.vn/van-hoa.rss");
        res.json(feed.items.slice(0, 10));
    } catch (error) {
        res.status(500).json({ type: "error", message: error.message });
    }
});

app.get("/doi-song-van-hoa", async (req, res) => {
    try {
        const parser = new Parser();
        const feed = await parser.parseURL(
            "https://baotintuc.vn/doi-song-van-hoa.rss"
        );
        res.json(feed.items.slice(0, 10));
    } catch (error) {
        res.status(500).json({ type: "error", message: error.message });
    }
});

app.get("/am-thuc", async (req, res) => {
    try {
        const parser = new Parser();
        const feed = await parser.parseURL(
            "https://baotintuc.vn/am-thuc.rss"
        );
        res.json(feed.items.slice(0, 10));
    } catch (error) {
        res.status(500).json({ type: "error", message: error.message });
    }
});
app.get("/giai-tri-sao", async (req, res) => {
    try {
        const parser = new Parser();
        const feed = await parser.parseURL(
            "https://baotintuc.vn/giai-tri-sao.rss"
        );
        res.json(feed.items.slice(0, 10));
    } catch (error) {
        res.status(500).json({ type: "error", message: error.message });
    }
});
app.get("/du-lich", async (req, res) => {
    try {
        const parser = new Parser();
        const feed = await parser.parseURL(
            "https://baotintuc.vn/du-lich.rss"
        );
        res.json(feed);
    } catch (error) {
        res.status(500).json({ type: "error", message: error.message });
    }
});
// THỂ THAO
app.get("/the-thao", async (req, res) => {
    try {
        const parser = new Parser();
        const feed = await parser.parseURL("https://baotintuc.vn/the-thao.rss");
        res.json(feed);
    } catch (error) {
        res.status(500).json({ type: "error", message: error.message });
    }
});
app.get("/bong-da", async (req, res) => {
    try {
        const parser = new Parser();
        const feed = await parser.parseURL(
            "https://baotintuc.vn/bong-da.rss"
        );
        res.json(feed);
    } catch (error) {
        res.status(500).json({ type: "error", message: error.message });
    }
});
app.get("/tennis", async (req, res) => {
    try {
        const parser = new Parser();
        const feed = await parser.parseURL(
            "https://baotintuc.vn/tennis.rss"
        );
        res.json(feed);
    } catch (error) {
        res.status(500).json({ type: "error", message: error.message });
    }
});
app.get("/the-thao-24h", async (req, res) => {
    try {
        const parser = new Parser();
        const feed = await parser.parseURL(
            "https://baotintuc.vn/the-thao-24h.rss"
        );
        res.json(feed.items.slice(0, 10));
    } catch (error) {
        res.status(500).json({ type: "error", message: error.message });
    }
});
app.get("/chuyen-the-thao", async (req, res) => {
    try {
        const parser = new Parser();
        const feed = await parser.parseURL(
            "https://baotintuc.vn/chuyen-the-thao.rss"
        );
        res.json(feed.items.slice(0, 10));
    } catch (error) {
        res.status(500).json({ type: "error", message: error.message });
    }
});
// app.get("/the-thao-khac", async (req, res) => {
//   try {
//     const parser = new Parser();
//     const feed = await parser.parseURL(
//       "https://thanhnien.vn/rss/the-thao/the-thao-khac.rss"
//     );
//     res.json(feed.items.slice(0, 10));
//   } catch (error) {
//     res.status(500).json({ type: "error", message: error.message });
//   }
// });

//CÔNG NGHỆ
app.get("/cong-nghe", async (req, res) => {
    try {
        const parser = new Parser();
        const feed = await parser.parseURL(
            "https://baotintuc.vn/khoa-hoc-cong-nghe.rss"
        );
        res.json(feed.items.slice(0, 10));
    } catch (error) {
        res.status(500).json({ type: "error", message: error.message });
    }
});
app.get("/o-to-xe-may", async (req, res) => {
    try {
        const parser = new Parser();
        const feed = await parser.parseURL(
            "https://baotintuc.vn/o-to-xe-may.rss"
        );
        res.json(feed.items.slice(0, 10));
    } catch (error) {
        res.status(500).json({ type: "error", message: error.message });
    }
});
app.get("/dien-tu-vien-thong", async (req, res) => {
    try {
        const parser = new Parser();
        const feed = await parser.parseURL(
            "https://baotintuc.vn/dien-tu-vien-thong.rss"
        );
        res.json(feed.items.slice(0, 10));
    } catch (error) {
        res.status(500).json({ type: "error", message: error.message });
    }
});
app.get("/khoa-hoc-doi-song", async (req, res) => {
    try {
        const parser = new Parser();
        const feed = await parser.parseURL(
            "https://baotintuc.vn/khoa-hoc-doi-song.rss"
        );
        res.json(feed.items.slice(0, 10));
    } catch (error) {
        res.status(500).json({ type: "error", message: error.message });
    }
});
// app.get("/esports", async (req, res) => {
//   try {
//     const parser = new Parser();
//     const feed = await parser.parseURL(
//       "https://thanhnien.vn/rss/cong-nghe-game/esports.rss"
//     );
//     res.json(feed.items.slice(0, 10));
//   } catch (error) {
//     res.status(500).json({ type: "error", message: error.message });
//   }
// });
app.get("/search", async (req, res) => {
    try {
        const keywords = req.query.keywords; // Lấy từ khóa từ query parameter
        const url = `https://baotintuc.vn/Search.aspx?KeySearch==${encodeURIComponent(
            keywords
        )}`;
        const response = await axios.get(url);
        const html = response.data;

        const $ = cheerio.load(html);
        const items = [];

        $(".box-category-item").each((index, element) => {
            const link =
                "/news" +
                $(element).find(".box-category-link-with-avatar").attr("href");
            const avatar = $(element).find(".box-category-avatar").attr("src");
            const category = $(element).find(".box-category-category").text().trim();
            const time = $(nelement).find(".box-time").attr("title");
            const title = $(element).find(".box-category-link-title").text().trim();
            const description = $(element).find(".box-category-sapo").text().trim();
            const tags = $(element)
                .find(".tags a")
                .map((index, el) => $(el).text().trim())
                .get();
            if (link && category && title && description && tags.length > 0) {
                const item = { link, category, title, description, tags, avatar, time };
                items.push(item);
            }
        });

        res.json(items);
        console.log(res);
    } catch (error) {
        res.status(500).json({ type: "error", message: error.message });
    }
});

app.get("/news", async (req, res) => {
    try {
        const linkHtml = req.query.linkHtml;

        const response = await axios.get(linkHtml);
        const html = response.data;
        const $ = cheerio.load(html);
        // Lấy tiêu đề bài viết
        const title = $("h1").html();
        // setArticleTitle(title);

        // Lấy mô tả bài viết
        const description = $(".detail-sapo").text();
        // setArticleDescription(description);

        // Lấy nội dung bài viết
        const content = $(".detail-cmain").html();
        // setArticleContent(content);

        // Lấy ngày đăng bài viết
        const publishDate = $(".detail-time").html();

        const imgElement = $('img[data-author=""]');
        const avatar = imgElement.attr("src");
        const data = { title, description, content, publishDate, linkHtml, avatar };
        res.json(data);
    } catch (error) {
        res.status(500).json({ type: "error", message: error.message });
    }
});

const PORT = process.env.PORT || 4050;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
