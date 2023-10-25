import React from 'react';

function Sidebar() {
    return (
  
            <div className=' bg-amber-50 h-24 p-5 w-full flex  text-2xl'>
                <div className='text-zinc-800 flex items-center justify-start w-1/3 '>
                    <i className="pi pi-bars m-8 text-2xl"></i>
                    <h1 className='text-2xl'>Menu</h1>
                </div>
                <div className='w-1/3 flex justify-center items-center'>
                    <img src="/images/logo.png" alt="" className='w-24 h-auto' />
                </div>
                <div className='text-zinc-800 w-1/3  flex ml-14 items-center justify-end '>
                    <div className='flex items-center justify-end mr-11 pl-15'>
                        <p className='mr-3'>Account</p>
                        <p className='m-10'>Cart</p>
                    </div>
                </div>
            </div>

    );
}

export default Sidebar;