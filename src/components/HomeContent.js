import { useWindowSize } from "./functions/functions";

function HomeContent() {
    const size = useWindowSize();
    return (
        <>
            <div className="typing-container">
                <p>
                    Programming is <span className="typed-text">...</span>
                </p>
            </div>
            {size.width > 768 ? <Terminal /> : <MobileContent />}
        </>
    );
}

const Terminal = () => {
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

const MobileContent = () => {
    return (
        <>
            <div className="homecontent-mobile">
                <h1>Fun</h1>
                <h1>Frustrating</h1>
                <h1>Challenging</h1>
                <h1>Rewarding</h1>
            </div>
        </>
    );
};
export default HomeContent;
