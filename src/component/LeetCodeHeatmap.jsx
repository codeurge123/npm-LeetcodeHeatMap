import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./App.css";

export default function LeetCodeHeatmap({ username }) {
  const [values, setValues] = useState([]);

  useEffect(() => {
    async function fetchHeatmap() {
      try {
        const res = await fetch(
          `https://leetcode-stats-api.herokuapp.com/${username}`
        );
        const data = await res.json();

        if (!data.submissionCalendar) return;

        const calendar = data.submissionCalendar;

        const formatted = Object.keys(calendar).map(ts => ({
          date: new Date(Number(ts) * 1000).toISOString().slice(0, 10),
          count: calendar[ts]
        }));

        setValues(formatted);
      } catch (err) {
        console.error("Heatmap fetch error:", err);
      }
    }

    if (username) fetchHeatmap();
  }, [username]);

  const today = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  const formatDate = date =>
    new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });

  return (
    <div className="heatmap-wrapper">
      <p className="heatmap-title">LeetCode Activity Heatmap</p>

      <CalendarHeatmap
        startDate={oneYearAgo}
        endDate={today}
        values={values}
        gutterSize={4}
        showWeekdayLabels
        classForValue={value => {
          if (!value) return "color-empty";
          if (value.count >= 7) return "color-leetcode-4";
          if (value.count >= 3) return "color-leetcode-3";
          if (value.count >= 2) return "color-leetcode-2";
          return "color-leetcode-1";
        }}
        tooltipDataAttrs={value => {
          if (!value) return null;
          return {
            "data-tooltip": `${value.count} submissions on ${formatDate(
              value.date
            )}`
          };
        }}
      />
    </div>
  );
}
