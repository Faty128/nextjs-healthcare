// "use client";

// import { createContext, useState, ReactNode } from "react";

// const initialValue = { 
//     isCollapsedSidebar: false, 
//     toggleSidebarCollapseHandler: () => {},
// };

// export const SidebarContext = createContext(initialValue);

// const SidebarProvider = ({ children }) => {
//     const [isCollapsedSidebar, setIsCollapsedSidebar] = useState(false);

//     const toggleSidebarCollapseHandler = () => {
//         setIsCollapsedSidebar(prev => !prev);
//     };

//     return (
//         <SidebarContext.Provider value={{ isCollapsedSidebar, toggleSidebarCollapseHandler }}>
//             {children}
//         </SidebarContext.Provider>
//     );
// };

// export default SidebarProvider;
