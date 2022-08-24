import classNames from "classnames"
import { ButtonHTMLAttributes, PureComponent, ReactNode } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: "primary"
}

export class Button extends PureComponent<ButtonProps> {
    render(): ReactNode {
        const { className, children, color, ...rest } = this.props

        const classes = classNames(
            "btn",
            {
                "btn-primary": color === "primary",
            },
            className,
        )

        return (
            <button {...rest} className={classes}>
                {children}
            </button>
        )
    }
}
