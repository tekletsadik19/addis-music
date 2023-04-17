'use client'
import { ReactNode } from "react";
import {ThemeProvider} from "next-themes";
import { SessionProvider } from "next-auth/react";
import {store} from '@/redux/store';
import { Provider } from 'react-redux';

const Providers =  ({children}:{children:ReactNode}) => {
    return (
        <Provider store={store}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                 <SessionProvider>
                      {children}
                </SessionProvider>
            </ThemeProvider>
        </Provider>
        
    ) ;
}
 
export default Providers;