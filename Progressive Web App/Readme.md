<img src="../img/Progressive-web-app.jpg" alt="Progressive-web-app" width="100%"/>

### Resource

https://developers.google.com/web/fundamentals/primers/service-workers/
https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/
https://codelabs.developers.google.com/codelabs/your-first-pwapp/#1
https://developers.google.com/web/fundamentals/primers/service-workers/
https://codelabs.developers.google.com/codelabs/debugging-service-workers/#0

### Note

The criteria that need to be met before the Add to Home Screen prompt will be shown:

- You need a manifest.json file.
- Your manifest file needs a start URL.
- You need a 144 x 144 PNG icon.
- Your site must be using a Service Worker running over HTTPS.
- The user must have visited your site at least twice, with at least five minutes between visits.

### Understanding IndexedDB

IndexedDB is a low-level API for client-side storage of significant amounts of structured
data, including files or blobs. This API uses indexes to enable high-performance
searches of this data. Although DOM storage is useful for storing smaller amounts
of data, it’s less useful for storing larger amounts of structured data. This is where
IndexedDB fits in—it’s a better solution when it comes to large amounts of data.
