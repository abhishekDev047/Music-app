"use client";
import Sidebar from './Components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Provider } from 'react-redux';
import store from '@/Redux/store';

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
      <body className=' container-fluid text-center bg-dark fs-5'>
        <section className='row'>
          <div className='col-sm-2 text-light sidebar '>
              <Sidebar/>
          </div>
       
          <div className="col-sm-10 vh-100 p-2">
            {children}
            </div>
         </section>
        </body>
    </html>
    </Provider>
  )
}
