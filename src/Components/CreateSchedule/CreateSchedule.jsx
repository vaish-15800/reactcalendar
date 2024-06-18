import React from 'react';

import './CreateSchedule.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';


const people = [
  { name: 'Eddie Lobanovskiy', email: 'lobanovskiy@gmail.com', imageUrl: image1},
  { name: 'Alexey Stave', email: 'alexeySt@gmail.com', imageUrl: image2 },
  { name: 'Anton Tkacheve', email: 'tkacheveAnton@gmail.com', imageUrl: image3 }
];

const CreateSchedule = () => (
    <div className="create-schedule-container">
  <div className="create-schedule">
   <h2>Calendar</h2>
    <button className="create-schedule-button">+ Create Schedule</button>
    <div className="calendar-containerr">
      <div className="calendar-header">
        <span>December 2, 2021</span>
        <div className="calendar-nav">
          <button className="nav-button">{"<"}</button>
          <button className="nav-button">{">"}</button>
        </div>
      </div>
      <table className="calendar-table">
        <thead>
          <tr>
            <th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="inactive">29</td><td className="inactive">30</td><td>1</td><td >2</td><td className="selected">3</td><td>4</td><td>5</td>
          </tr>
          <tr>
            <td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td>
          </tr>
          <tr>
            <td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td>
          </tr>
          <tr>
            <td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td>
          </tr>
          <tr>
            <td>27</td><td>28</td><td>29</td><td>30</td><td>31</td><td className="inactive">1</td><td className="inactive">2</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="people-section">
      <h3>People</h3>
      <input type="text" placeholder="Search for People" className="search-input" />
      <div className="people-list">
        {people.map((person, index) => (
          <div key={index} className="person">
            <img src={person.imageUrl} alt={person.name} className="avatar" />
            <div className="person-info">
              <span className="person-name">{person.name}</span>
              <span className="person-email">{person.email}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <button className="my-schedule-button">My Schedule</button>
  </div>
  </div>
);

// const CalendarNav = ({ onSetActiveView }) => {
//   const [activeView, setActiveView] = useState('Month');

//   const handleSetActiveView = (view) => {
//     setActiveView(view);
//     if (onSetActiveView) {
//       onSetActiveView(view);
//     }
//   };
//   return (
//     <div className="calendar-nav">
//       <h2>Calendar</h2>
//       <div className="view-buttons">
//         {['Day', 'Week', 'Month', 'Year'].map(view => (
//           <button
//             key={view}
//             className={activeView === view ? 'active' : ''}
//             onClick={() => handleSetActiveView(view)}
//           >
//             {view}
//           </button>
//         ))}
//       </div>
//       </div>
//   );
// };

export default CreateSchedule;
