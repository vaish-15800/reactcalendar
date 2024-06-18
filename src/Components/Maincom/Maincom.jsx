import React from 'react';
import './Maincom.css';

const Maincom = () => {
  return (
    <div className="calendar-container">
      <div className="calendar-top-nav">
        {/* <span className="calendar-title">Calendar</span> */}
        <div className="calendar-buttons">
          <button className="nav-button">Day</button>
          <button className="nav-button">Week</button>
          <button className="nav-button active">Month</button>
          <button className="nav-button">Year</button>
        </div>
      </div>
      <div className="calendar-header">
        <span>December 2, 2021</span>
        <div className="navigation">
          <button className='navigation'>{'<'}</button>
          <button className='navigation'>{'>'}</button>
        </div>
      </div>
      <div className="calendar-days">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="calendar-body">
        <div className="empty">29</div>
        <div className="empty">30</div>
        <div className="day">01</div>
        <div className="day">
        <span>02</span>
          <div className="event free-day">Free day</div>
          <div className="event party-time">Party Time</div>
          <div className="event more">More</div>
        </div>
        <div className="day">03</div>
        <div className="day">04</div>
        <div className="day">05</div>
        {/* <div className="day">
          <span>02</span>
          <div className="event free-day">Free day</div>
          <div className="event party-time">Party Time</div>
          <div className="event more">More</div>
        </div> */}
        <div className="day">06</div>
        <div className="day">07</div>
        <div className="day">08</div>
        <div className="day">09</div>
        <div className="day">10</div>
        <div className="day">11</div>
        <div className="day">12</div>
        <div className="day">13</div>
        <div className="day">14</div>
        <div className="day">15</div>
        <div className="day">
          <span>16</span>
          <div className="event victory-day">Victory day</div>
        </div>

        <div className="day">17</div>
        <div className="day">18</div>
        <div className="day">19</div>
        {/* <div className="day">
          <span>18</span>
          <div className="event victory-day">Victory day</div>
        </div> */}
        <div className="day">20</div>
        <div className="day">
          <span>21</span>
          <div className="event invited">Invited by Friends</div>
        </div>

        <div className="day">22</div>
        <div className="day">23</div>
        <div className="day">24</div>
        {/* <div className="day">
          <span>23</span>
          <div className="event invited">Invited by Friends</div>
        </div> */}
         <div className="day">
          <span>25</span>
          <div className="event christmas-day">Christmas Day</div>
        </div>
        <div className="day">26</div>
        <div className="day">27</div>
        <div className="day">28</div>
        {/* <div className="day">
          <span>27</span>
          <div className="event christmas-day">Christmas Day</div>
        </div> */}
        <div className="day">29</div>
        <div className="day">30</div>
        <div className="day">31</div>
        <div className="empty">01</div>
        <div className="empty">02</div>
        
      </div>
    </div>
  );
};

export default Maincom;
