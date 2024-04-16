
function fetchAndDisplayNews() {
    const country = document.getElementById('country-select').value;
    fetch(`http://localhost:3000/news?country=${country}`)
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            newsContainer.innerHTML = '';
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
