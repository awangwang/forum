import React from 'react'
import Search from './Search';
import Content from './Content';
import Sidebar from './Sidebar';

const MainPage = () => {
  return (
    <>
        <section>
            <Search />
        </section>
        <hr className='separator'/>
        <section>
            <div className='container'>
            <Content />
            <Sidebar />
            </div>
        </section>
    </> 
  )
}

export default MainPage