/*
 * Purpose: Reports web vitals metrics to a specified function for performance monitoring.
 * Parameters:
 *   - onPerfEntry: A function to which the web vitals metrics are reported.
 * Methods:
 *   - Import 'web-vitals' module asynchronously to access web vitals metrics.
 *   - Call getCLS, getFID, getFCP, getLCP, getTTFB functions to retrieve and report individual web vitals metrics.
 */

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
