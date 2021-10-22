import React from 'react';
import './App.css';
import SidebarNavigation from "./components/sidebar-navigation";

function App() {
    return (
            <div className="h-screen flex bg-gray-100">
                <div className="flex flex-col w-64">
                    <SidebarNavigation/>
                </div>
            </div>
    );
}

export default App;
