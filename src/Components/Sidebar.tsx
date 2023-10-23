import React from 'react';

function Sidebar() {
    return (
  
            <div className=' bg-amber-50 h-20 w-full flex items-center text-2xl'>
                <div className='text-gray-500 flex items-center justify-start w-1/3 '>
                    <i className="pi pi-bars m-8 text-2xl"></i>
                    <h1 className='text-2xl'>Menu</h1>
                </div>
                <div className='w-1/3 flex justify-center items-center'>
                    <img src="https://images.vexels.com/media/users/3/223411/isolated/preview/7a8154be7b9b50412fc2cf63b636e370-icono-de-tienda-tienda-plana.png" alt="" className='w-12 h-auto' />
                </div>
                <div className='text-gray-500 w-1/3 flex items-center justify-center '>
                    <div className='flex items-center justify-end pl-15'>
                        <p className='m-6'>Account</p>
                        <p className='m-10'>Cart</p>
                    </div>
                </div>
            </div>

    );
}

export default Sidebar;