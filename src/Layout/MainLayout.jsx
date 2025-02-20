import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const MainLayout = () => {
const {pathname} = useLocation()
                    return (
                                        <div>
                                      <div className='container mx-auto'>
                                        {pathname === '/register' || pathname === '/login' || <Navbar></Navbar>}
                                      <div className='min-h-[calc(100vh-275px)] pt-36'>
                                      <Outlet></Outlet>   
                                      </div>
                                      </div>
                                      {pathname === '/register' || pathname === '/login' || <Footer></Footer> }
                                                        
                                        </div>
                    );
};

export default MainLayout;