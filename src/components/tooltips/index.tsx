import Tippy, { TippyProps } from "@tippyjs/react/headless"
import { forwardRef, useMemo } from "react"
import { motion, useSpring } from "framer-motion"
import "./tooltip.css"

interface TooltipProps extends Omit<TippyProps, "render" | "popperOptions" | "onMount" | "onHide" | "animation"> {
    content: React.ReactNode
    disable?: boolean
}

export const Tooltip: React.FC<TooltipProps> = forwardRef(function Tooltip(
    { children, content, placement, disable, ...props },
    ref,
) {
    const springConfig = { damping: 15, stiffness: 500 }
    const initialScale = 0.75
    const opacity = useSpring(0, springConfig)
    const scale = useSpring(initialScale, springConfig)
    const originX = useMemo(
        () => (placement?.includes("right") ? 0 : placement?.includes("left") ? "100%" : undefined),
        [placement],
    )

    // if (disable) {
    //     return <>{children}</>
    // }

    const onMount: TippyProps["onMount"] = () => {
        scale.set(1)
        opacity.set(1)
    }

    const onHide: TippyProps["onHide"] = ({ unmount }) => {
        const cleanup = scale.onChange((value) => {
            if (value <= initialScale) {
                cleanup()
                unmount()
            }
        })

        scale.set(initialScale)
        opacity.set(0)
    }

    return (
        <Tippy
            ref={ref}
            placement={placement}
            render={(attrs) =>
                disable ? undefined : (
                    <motion.div
                        className="tooltip-box rounded-md bg-black px-2 py-1 text-xs font-medium text-white"
                        style={{ scale, opacity, originX }}
                        tabIndex={-1}
                        {...attrs}
                    >
                        {content}
                        <div className="tooltip-box-arrow" data-popper-arrow=""></div>
                    </motion.div>
                )
            }
            popperOptions={{
                modifiers: [
                    {
                        name: "offset",
                        options: {
                            offset: [0, 10],
                        },
                    },
                ],
            }}
            animation={true}
            onMount={onMount}
            onHide={onHide}
            {...props}
        >
            {children}
        </Tippy>
    )
})
