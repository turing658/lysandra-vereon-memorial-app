import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");
  const [entries, setEntries] = useState([]);

  const saveEntry = () => {
    const entry = {
      mood,
      note,
      date: new Date().toLocaleString()
    };
    setEntries([entry, ...entries]);
    setMood("");
    setNote("");
  };

  return (
    <main className="App">
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Lysandra ♥ Vereon
      </motion.h1>

      <div className="card">
        <label>写下今天的心情：</label>
        <textarea
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="今天 Vereon 有没有让你心动？"
        />
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
