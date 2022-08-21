import { FiZap } from "react-icons/fi"

const SidebarLogo = () => (
    <div className="flex items-center justify-center gap-2 p-2 text-2xl lg:justify-start lg:px-4">
        <FiZap size={24} className="text-yellow-500" />
        <span className="hidden text-primary-500 lg:inline">Logo</span>
    </div>
)

export default SidebarLogo
