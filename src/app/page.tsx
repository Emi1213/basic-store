import Sidebar from '@/Components/Sidebar'
import Image from 'next/image'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


export default function Home() {
  return (
    <main >
        <div className='flex '>
          <Sidebar />
        </div>
    </main>
  )
}
