function AboutBlock() {

    const aboutData = require('./about-content.json')
    
    return (
        aboutData.map((block) => (
            <div>
                <h3>{block.title}</h3>
                <p>{block.content}</p>
            </div>
            
        ))
    );
}

export default AboutBlock;
