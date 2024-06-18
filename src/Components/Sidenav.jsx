import {chevronFirst} from "lucide-react"

import logo from "../assets/Logo.png"

import Dashboard from "../assets/Category.png"
import Analytics from "../assets/Chart.png"
import Invoice from "../assets/Ticket.png"
import Schedule from "../assets/Document.png"
import Calendar from "../assets/Calendarr.png"
import Message from "../assets/Activity.png"
import Notificationn from "../assets/Notificationn.png"
import Settings from "../assets/Setting.png"
import four from "../assets/four.png"

import Illustration from "../assets/Illustration.png"
import LogOut from "../assets/LogOut.png"

export default function Sidenav ({children}){
    return(
        <>
        <aside className=" ">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div style={{
      display: 'flex',
      justifyContent: 'between',  
      alignItems: 'center',      
      
      height: '180px',
      top: '50px',
      left: '100px',
      
      
    }} 
    // className=" p-4 pb-2 flex justify-between items-center"
    >
                    <img src={logo} className="" style={{marginTop:'5px' , marginBottom:'20px', marginLeft:'70px'}}  />

                </div>
                <ul className="flex-1 px-3">
                    {children}

                </ul>


                {/* <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
                
                    <img src={Chart}  />
                    <span className="w-52 ml-3">chart</span>
                   
                </li> */}


                <div className=" flex p-3  ">
                   <img src={ Illustration}/>
                </div>
            <div className=" flex p-3 ">
                <img src={LogOut}/>
            </div>

            </nav>

        </aside>
        </>
    )
}

export function SidenavItem() //({icon, text, active, alert})//
{
    return(
            //   <ul>
            //     {icon}
            //     <span>{text}</span>

            //   </ul>
            <div>
            
                 <li className={`relative flex items-center py-3 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
                
                <img src={Dashboard}  />
                <span className="w-52 ml-3">Dashboard</span>

              
               
            </li>
            <li className={`relative flex items-center py-3 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
                
                <img src= {Analytics} />
                <span className="w-52 ml-3">Analytics</span>
            </li>

            <li className={`relative flex items-center py-3 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
                
                <img src= {Invoice}  />
                <span className="w-52 ml-3">Invoice</span>
            </li>

            <li className={`relative flex items-center py-3 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
                
                <img src= {Schedule}style={{ width: '20px', height: '20px' }} />
                <span className="w-52 ml-3">Schedule</span>
            </li>

            <li className={`relative flex items-center py-3 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
                
                <img src= {Calendar} />
                <span className="w-52 ml-3">Calendar</span>
                
            </li>

            <li className={`relative flex items-center py-3 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
                
                <img src= {Message} style={{ width: '20px', height: '20px' }}/>
                <span className="w-39 ml-3  ">Message</span>
                <img src={four} style={{ marginleft: '20px', padding:'5', width:'15px' }}/>
            </li>

            <li className={`relative flex items-center py-3 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
                
                <img src= {Notificationn}  style={{ width: '20px', height: '20px' }}/>
                <span className="w-52 ml-3">Notification</span>
            </li>

            <li className={`relative flex items-center py-3 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
                
                <img src= {Settings} style={{ width: '20px', height: '20px' }}/>
                <span className="w-52 ml-3">Settings</span>
            </li>

           

          
            
            </div>
           
            
    )
}