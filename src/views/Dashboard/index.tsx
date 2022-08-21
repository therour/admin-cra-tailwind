import { useMemo } from "react"
import { Outlet } from "react-router-dom"
import { useAuthStore } from "../../stores/auth"
import Layout from "./layout"
import sidebarMenus from "./sidebar-menu"

const Dashboard: React.FC = () => {
    const clearAuthentication = useAuthStore((s) => s.clearAuthentication)
    const menuItems = useMemo(() => sidebarMenus(), [])

    return (
        <div className="grid min-h-screen grid-cols-1 sm:grid-cols-[52px_1fr] lg:grid-cols-[240px_1fr]">
            <Layout.Sidebar>
                <Layout.SidebarLogo />

                <Layout.SidebarMenu items={menuItems} />
            </Layout.Sidebar>

            <Layout.Main>
                <div className="flex p-2">
                    {/* Header Here */}
                    <button className="ml-auto" onClick={clearAuthentication}>
                        Log out
                    </button>
                </div>
                <div className="p-2 sm:px-5">
                    <Outlet />
                </div>
            </Layout.Main>
        </div>
    )
}

export default Dashboard
