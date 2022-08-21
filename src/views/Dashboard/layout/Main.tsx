interface MainProps {
    children: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
    return <main className="grid h-full grid-rows-[60px_1fr]">{children}</main>
}

export default Main
