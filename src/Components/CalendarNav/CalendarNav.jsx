
import React, { useState } from 'react';
import './CalendarNav.css';

const CalendarNav = () => {
  const [activeView, setActiveView] = useState('Month');

  return (
    <div className="calendar-nav">
      <h2>Calendar</h2>
      <div className="view-buttons">
        {['Day', 'Week', 'Month', 'Year'].map(view => (
          <button
            key={view}
            className={activeView === view ? 'active' : ''}
            onClick={() => setActiveView(view)}
          >
            {view}
          </button>
        ))}
       </div>
       <div>
       
       </div>
  </div>
  );
};

export default CalendarNav;









// import React from 'react';
// import './CalendarNav.css';

// const CalendarNav = () => {
//   return (
//     <div className="calendar-nav">
//       <h2>Calendar</h2>
//       <div className="view-buttons">
//         <button className="view-button ">Day</button>
//         <button className="view-button">Week</button>
//         <button className="view-button active">Month</button>
//         <button className="view-button">Year</button>
//       </div>
//     </div>
//   );
// };

// export default CalendarNav;
