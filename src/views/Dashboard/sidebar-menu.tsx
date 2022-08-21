import { FiHome, FiSettings, FiShoppingBag } from "react-icons/fi"
import { To } from "react-router-dom"

export type MenuItem = {
    icon: React.ReactElement
    text: React.ReactNode
    to: To
}

const sidebarMenus = (): MenuItem[] => [
    {
        to: "/",
        text: "Home",
        icon: <FiHome />,
    },
    {
        to: "/rewards",
        text: "Rewards",
        icon: <FiShoppingBag />,
    },
    {
        to: "/settings",
        text: "Settings",
        icon: <FiSettings />,
    },
]

export default sidebarMenus
