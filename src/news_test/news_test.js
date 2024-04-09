const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('1248cb6390864c45a7b5aada4531d241');
const fs = require('fs');

newsapi.v2.topHeadlines({
  q: 'AI',
  category: 'politics',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);

  const dataString = JSON.stringify(response, null, 2);

  fs.writeFile('newsData.json', dataString, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}).catch(error => {
  console.error("Error fetching news:", error);
});

function fetchAndDisplayNews() {
  fetch('newsData.json') // Adjust the path if your JSON file is located elsewhere
    .then(response => response.json())
    .then(data => {
      const newsContainer = document.getElementById('news-container');
      newsContainer.innerHTML = ''; // Clear previous news

      data.articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('news-article');

        articleElement.innerHTML = `
                  <h2>${article.title}</h2>
                  <p>By ${article.author || 'Unknown Author'}</p>
                  ${article.urlToImage ? `<img src="${article.urlToImage}" alt="Article Image">` : ''}
                  <p>${article.description || ''}</p>
                  <a href="${article.url}" target="_blank">Read more</a>
              `;

        newsContainer.appendChild(articleElement);
      });
    })
    .catch(error => {
      console.error("Failed to fetch news", error);
    });
}
