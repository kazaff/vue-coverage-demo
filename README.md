## Step 1

```
node ./coverageServer.js
```

## Step 2
```
npm run dev
```

## Step 3
Open the page in browser, and trigger some action on page.
Then please send the coverage data to the server by manual, like this:

```javascript
fetch('http://localhost:8088/coverage/client', {     
    method: 'POST',
    headers: {'Content-Type': 'application/json'},  
    body: JSON.stringify(window.__coverage__),
    keepalive: false
});
```

## Step 4
Open the coverage server page(http://localhost:8088/coverage) in browser, and visit the coverage detail.
Then Crash.....

