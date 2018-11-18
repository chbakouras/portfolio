import React from "react";

class NewLineToBr {

    static render(text) {
        return text.split('\n')
            .reduce((arr, line) => arr.concat(line, <br/>), [])
    }
}

export default NewLineToBr;
