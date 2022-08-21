import React from "react"

interface SidebarProps {
    children?: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    return (
        <aside className="hidden border-r border-gray-200 bg-white sm:grid sm:h-full sm:grid-rows-[60px_1fr]">
            {children}
        </aside>
    )
}

export default Sidebar
