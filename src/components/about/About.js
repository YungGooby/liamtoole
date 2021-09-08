import AboutBlock from "./AboutBlock";
function About() {
    return (
        <>
            <h1>A little bit about myself.</h1>
            <hr className="solid" />
            <AboutBlock />
            <div className="contact-wrapper">
                <button className="contact-button">Contact Me</button>
            </div>
        </>
    );
}

export default About;
