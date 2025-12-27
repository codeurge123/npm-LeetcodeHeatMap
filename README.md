# leetcode-heatmap-track

A lightweight React component to display a **GitHub-style LeetCode activity heatmap** using public LeetCode stats data.

This package fetches LeetCode submission data and visualizes daily activity in a clean, centered heatmap — ideal for **portfolios, dashboards, and profile pages**.

---

## Features

- GitHub-style contribution heatmap  
- Fetches real LeetCode submission data  
- Shows daily submission count  
- Hover to see date & submissions (LeetCode-like)  
- Easy to use React component  
- Lightweight and simple API  

---

## Installation

```bash
npm install leetcode-heatmap-track
```

## Example for Leetcode Heatmap

```
import React from "react";
import { LeetCodeHeatmap } from "leetcode-heatmap-track";

function App() {
  return (
    <div style={{ padding: "40px" }}>
      <LeetCodeHeatmap username="your_leetcode_username" />
    </div>
  );
}

export default App;


```

## Example for Leetcode Data

```
import React, { useEffect } from "react";
import { LeetcodeData } from "leetcode-heatmap-track";

export default function App() {

  useEffect(() => {
    LeetcodeData("your_leetcode_username")
      .then((data) => {
        console.log("LeetCode Data:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <h1>Check console for LeetCode data</h1>
    </div>
  );
}


```

### Data Source

---

This package uses a public API:
```
https://leetcode-stats-api.herokuapp.com/{username}      
```
- This is an unofficial API, so avoid frequent polling.

---

### Notes

---

Shows last 1 year of activity by default

Counts submissions, not just accepted problems

Days with no activity are shown as empty blocks

---

### License

---

ISC

---

### Author

---

codeurge

---
