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
    <div className=''>
      <Sidebar/>
      <Topbar/>
      <div className=" ml-44   ">
        <NewsList/>
     

    </div>
    {/* <div className=' grid grid-cols-2'>
      <div className='bg-yellow-300 ml-40'><NewsList/></div>
      <div className='bg-red-400'><NewsContent/></div>
    </div> */}
    </div>
  )

}
export default App