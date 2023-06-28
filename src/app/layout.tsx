"use client";
import Sidebar from './Components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Provider } from 'react-redux';
import {store} from '@/Redux/store';

export const metadata = {
  title: 'Music App',
  description: 'A single page music web app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
    <html lang="en">
      <body className='text-center bg-dark fs-5'>
        <section className='flex-col flex'>
          <div className=' text-light sidebar'>
              <Sidebar/>
          </div>
       
          <div className="h-100 mt-20">
            {children}
            </div>
         </section>
        </body>
    </html>
    </Provider>
  )
}
