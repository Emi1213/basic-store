import Sidebar from '@/Components/Sidebar'
import Image from 'next/image'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Link from 'next/link';


export default function Home() {
  return (
    <main >
        <nav className='fixed top-0 w-full bg-gray-800  z-10'>
          <Sidebar/>
        </nav>
          <div className='w-full bg-white flex justify-center items-center z-11 '>
            <div className='w-full h-screen overflow-hidden relative'>
              <img src="https://img.freepik.com/foto-gratis/tienda-ropa-tienda-ropa-perchas-tienda-boutique-moderna_1150-8886.jpg?w=996&t=st=1698081751~exp=1698082351~hmac=2bbce71eaae9268c33030cf83a238302ea0fac1105f71c18b4b19dd71796fb24" alt="" className='object-cover w-full h-full absolute top-0 left-0'/>
            </div>
          </div>
        
        
    </main>
  )
}
