import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [boja, setBoja] = useState('white');
  const [border,setBorder]=useState(false)

  const withBorder=()=>{
    setBorder(true);
  }

  const withoutBorder=()=>{
    setBorder(false);
  }

  const promjena=(farba)=>{
    setBoja(farba);
  }

  const refreshPage=()=> {
    window.location.reload(false);
  }

  return (
    <AppContext.Provider value={{boja,promjena,withBorder,withoutBorder,refreshPage,border}}>
    {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };