import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import {useWindowSize} from '../functions/functions'

const Nav = () => {
    const size = useWindowSize();

    return(
        <>
        {size.width > 768 ? <DesktopNav/>:<MobileNav/>}
        </>
    )
};

export default Nav;
