import { useWindowSize } from "../functions/functions";
import HomeMobileContent from "./HomeMobileContent";
import HomeTerminal from "./HomeTerminal"

function HomeContent() {
    const size = useWindowSize();
    return (
        <>
            <div className="typing-container">
                <p>
                    Programming is <span className="typed-text">...</span>
                </p>
            </div>
            {size.width > 768 ? <HomeTerminal /> : <HomeMobileContent />}
        </>
    );
}
export default HomeContent;
