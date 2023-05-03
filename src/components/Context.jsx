import React,{useState,useContext} from 'react'

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    function close() {
      return setIsOpen((prev) => !prev);
    }
    return (
        <AppContext.Provider value={{
            isOpen,
            close
        }}>
            {children}
       </AppContext.Provider>
    )
}

const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppProvider,AppContext,useGlobalContext}