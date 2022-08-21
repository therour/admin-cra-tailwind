import { useResponsive } from "ahooks"
import classNames from "classnames"
import React from "react"
import { NavLink, To } from "react-router-dom"
import { Tooltip } from "../../../components/tooltips"
import { MenuItem } from "../sidebar-menu"

interface SidebarMenuItemProps {
    icon: React.ReactElement
    children: React.ReactNode
    disableTooltip?: boolean
    to: To
}
const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ icon: Icon, children, disableTooltip, to }) => {
    return (
        <Tooltip placement="right" content={children} disable={disableTooltip}>
            <NavLink
                end
                to={to}
                className={({ isActive }) =>
                    classNames(
                        `group flex h-[36px] w-[36px] items-center justify-center gap-4 rounded-lg lg:w-full lg:justify-start lg:px-2`,
                        {
                            "transform-gpu text-gray-700 transition hover:bg-gray-100 active:scale-95 active:bg-gray-200":
                                !isActive,
                            "cursor-default bg-primary-100 text-primary-900": isActive,
                        },
                    )
                }
            >
                {({ isActive }) => (
                    <>
                        {
                            <Icon.type
                                size={20}
                                className={classNames("transition ", {
                                    "text-gray-500 group-hover:text-gray-600 lg:text-gray-400": !isActive,
                                    "text-primary-700": isActive,
                                })}
                            />
                        }
                        <span className="hidden text-sm lg:inline">{children}</span>
                    </>
                )}
            </NavLink>
        </Tooltip>
    )
}
interface SidebarMenuProps {
    items?: MenuItem[]
}
const SidebarMenu: React.FC<SidebarMenuProps> = ({ items = [] }) => {
    const responsive = useResponsive()
    return (
        <div className="flex w-full flex-col gap-2 p-2">
            {items.map((item, idx) => (
                <SidebarMenuItem key={idx} to={item.to} icon={item.icon} disableTooltip={responsive.lg}>
                    {item.text}
                </SidebarMenuItem>
            ))}
        </div>
    )
}

export default SidebarMenu
