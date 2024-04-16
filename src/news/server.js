const express = require('express');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('1248cb6390864c45a7b5aada4531d241');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('public'));

app.get('/news', (req, res) => {
    const country = req.query.country || 'us'; // default to  if no country provided
    newsapi.v2.topHeadlines({
        country: country,
        category: "general",
        language: 'en'
    }).then(response => {
        res.json(response);
    }).catch(error => {
        console.error("Error fetching news:", error);
        res.status(500).send("Failed to fetch news");
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
