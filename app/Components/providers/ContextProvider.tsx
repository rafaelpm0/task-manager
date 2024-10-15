import { GlobalProvider } from '@/app/context/globalProvider';
import React from 'react'


interface Props{
    children: React.ReactNode;
}

function ContextProvider({ children }: Props) {
  return (
    <GlobalProvider>
      {children}
    </GlobalProvider>
  )
}

export default ContextProvider;
