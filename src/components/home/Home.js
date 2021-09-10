import { useWindowSize} from "../functions/functions"
import HomeMobileContent from "./HomeMobileContent";
import HomeTerminal from "./HomeTerminal"

function HomeContent() {
    const size = useWindowSize();
    return (
        <>
            <div className="home-header">
                <p>
                    Programming is <span className="home-header-accent">...</span>
                </p>
            </div>
            {size.width > 768 ? <HomeTerminal /> : <HomeMobileContent />}
        </>
    );
}
export default HomeContent;
