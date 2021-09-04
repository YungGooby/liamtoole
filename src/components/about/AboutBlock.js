import parse from 'html-react-parser'

function AboutBlock() {
    const aboutData = require("./about-content.json");

    return aboutData.map((block,index) => (
        <div key={index}>
            <h3>{block.title}</h3>
            {parse(`<div>${block.content}</div>`)}
            <hr className="solid" />
        </div>
    ));
}

export default AboutBlock;
