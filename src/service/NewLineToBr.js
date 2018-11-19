import React from "react";

class NewLineToBr {

    static render(text) {
        return text.split('\n')
            .reduce((arr, line, index) => arr.concat(<span key={index}>{line}</span>, <br key={'key' + index} />), []);
    }
}

export default NewLineToBr;
