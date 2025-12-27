async function LeetcodeData(username) {
  try {
    const res = await fetch(
      `https://leetcode-stats-api.herokuapp.com/${username}`
    );
    const data = await res.json();

    return data;
  } catch (err) {
    console.error("Heatmap fetch error:", err);
  }
}

export default LeetcodeData;