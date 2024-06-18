// import {Home, LayoutDashborad, } from "lucide-react"

import './App.css';
import Sidenav, { SidenavItem } from './Components/Sidenav';
import CreateSchedule from "./Components/CreateSchedule/CreateSchedule";
import Maincom from "./Components/Maincom/Maincom"

// import CalendarNav from "./Components/CalendarNav/CalendarNav";
// import Calendar from "./Components/Calendar/Calendar";


function App() {
  return (
    <>
    <div className="flex">
     
    <Sidenav>
      <SidenavItem />

    </Sidenav>
   <CreateSchedule>
   
   </CreateSchedule>
  
   <Maincom></Maincom>
   

   
   {/* <CalendarNav>
  
   
    
    </CalendarNav>
    
    <Calendar></Calendar> */}
    
 
    </div>
    </>
  );
}

export default App;
