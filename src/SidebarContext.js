import React, { createContext, useContext, useState } from 'react'

const SidebarContext = createContext();

function SidebarProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
}

const useSidebar = () => useContext(SidebarContext);
export { SidebarProvider, useSidebar };