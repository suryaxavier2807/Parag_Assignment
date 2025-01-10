import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/sidebar'
import Topbar from './components/topbar'
import NewsList from './components/newslist'
import NewsContent from './components/newsContent'

function App() {

  return(
   
    <div >

      <Sidebar/>
      
      <div className="overflow-x-auto transition-all duration-300 ml-0 md:ml-40   ">
        <div className=''><Topbar/></div>
        <div className=''><NewsList/></div>

       
    </div>
    
    </div>
  )

}
export default App

{/* <div>
          <Topbar/>
          </div>

        <div className=''>
          <NewsList/>
          </div>  */}