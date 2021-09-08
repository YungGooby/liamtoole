const HomeTerminal = () => {
    return (
        <>
            <div className="terminal-window">
                <header>
                    <div className="button green"></div>
                    <div className="button yellow"></div>
                    <div className="button red"></div>
                </header>
                <section className="terminal">
                    <span className="terminal-root">liam_@liam-pc</span>{" "}
                    <span className="terminal-ming">MINGW64 /</span>
                    <br />$ npx create-react-app new-project&nbsp;
                    <span className="typed-cursor">&nbsp;</span>
                </section>
            </div>
        </>
    );
};

export default HomeTerminal