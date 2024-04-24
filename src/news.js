/*
 * Purpose: Represents an instance of the NewsAPI client used for fetching news data.
 * Data Fields:
 *   - newsapi: An instance of the NewsAPI client initialized with the API key and CORS proxy URL.
 * Return Value: An instance of the NewsAPI client configured with the provided API key and CORS proxy URL.
*/

import NewsAPI from "newsapi";
export const newsapi = new NewsAPI('1248cb6390864c45a7b5aada4531d241', { corsProxyUrl: 'https://cors-anywhere.herokuapp.com/' });