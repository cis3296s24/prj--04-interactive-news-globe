const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('1248cb6390864c45a7b5aada4531d241');

// To query top headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
    q: 'AI',
    category: 'science',
    language: 'en',
    country: 'us'
}).then(response => {
    console.log(response);
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
});
