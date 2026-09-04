import React from 'react'
import GlobalContextProvider from '../../globalRouters/globalContext/GlobalContextProvider'
import { Outlet } from 'react-router-dom'
import {SnackbarProvider} from "notistack";

const BeforeLoginDefaultLayout = () => {
  return (
   <>
   <SnackbarProvider hideIconVariant autoHideDuration={2000}>
   <GlobalContextProvider>
   <Outlet />
   </GlobalContextProvider>
   </SnackbarProvider>
   </>
  )
}

export default BeforeLoginDefaultLayout;