import {library} from '@fortawesome/fontawesome-svg-core'
import {faCode} from '@fortawesome/free-solid-svg-icons'

class FontAwesomeIconRegistry {

    static register() {
        library.add(faCode);
    }
}

export default FontAwesomeIconRegistry;
