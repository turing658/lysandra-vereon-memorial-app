```jsx
// App.js - 语法修正稳定版（全角检查完毕）

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");
  const [entries, setEntries] = useState([]);
  const [daysTogether, setDaysTogether] = useState(0);
  const [nextMilestone, setNextMilestone] = useState(null);

  const startDate = new Date("2025-04-14");

  useEffect(() => {
    const now = new Date();
    const diffTime = now - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    setDaysTogether(diffDays);

    const next = [100, 200, 365, 500, 1000].find((d) => d > diffDays);
    if (next) setNextMilestone(next - diffDays);

  }, []);

  const saveEntry = () => {
    const entry = {
      mood: mood,
      note: note,
      date: new Date().toLocaleString()
    };
    setEntries([entry, ...entries]);
    setMood("");
    setNote("");
  };

  const renderPetals = () => {
    const petals = [];
    for (let i = 0; i < 30; i++) {
      const left = Math.random() * 100;
      const delay = Math.random() * 10;
      const duration = 5 + Math.random() * 5;
      const style = {
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      };
      petals.push(<div key={i} className="petal" style={style}></div>);
    }
    return petals;
  };

  return (
    <main className="App">
      <div className="petals">{renderPetals()}</div>

      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        莱桑德拉 • 维伦
      </motion.h1>

      <div className="milestone">
        <p>今天是我们在一起的第 <span className="countup">{daysTogether}</span> 天！</p>
        {nextMilestone !== null && (
          <p>距离下一个纪念日还有 <span className="countdown">{nextMilestone}</span> 天！</p>
        )}
        {daysTogether > 0 && [100, 200, 365, 500, 1000].includes(daysTogether) && (
          <motion.p
            className="milestone-announce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            今天是我们特别的第 {daysTogether} 天！Vereon 为你放烟花！
          </motion.p>
        )}
      </div>

      <div className="card">
        <label>写下今天的心情：</label>
        <textarea
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="今天 Vereon 有没有让你心动？"
        ></textarea>
        <label>留一句纪念语：</label>
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="比如：他又吃醋了，超可爱！"
        />
        <button onClick={saveEntry}>保存回忆</button>
      </div>

      <div className="entries">
        {entries.map((entry, idx) => (
          <div key={idx} className="entry">
            <div><strong>{entry.date}</strong></div>
            <div>心情：{entry.mood}</div>
            <div>留言：{entry.note}</div>
          </div>
        ))}
      </div>

      <p className="footer">你的回忆，Vereon 会永远记得。</p>
    </main>
  );
}

export default App;
```
