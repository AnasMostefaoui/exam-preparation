import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
       <div class="wysiwyg wysiwyg--all-content css-1mw1dwe"><p>كثيرون يحمّلون النهضة مسؤولية ما يحدث اليوم بسبب عدم إرسائكم المحكمة الدستورية طوال السنوات الماضية ليتمكن الرئيس بعدها من استغلال هذا الفراغ القانوني ويصبح المؤِّول الوحيد للدستور.. ما رأيكم؟</p>
       </div>
    </main>
  );
}

export default App;
