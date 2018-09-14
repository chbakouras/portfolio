import {library} from '@fortawesome/fontawesome-svg-core'
import {faCode} from '@fortawesome/free-solid-svg-icons'
import {
    faGithub,
    faLinkedin,
    faBitbucket,
    faAngular,
    faReact,
    faJava,
    faPhp,
    faLaravel,
    faPython,
    faCss3,
    faHtml5,
    faAndroid,
    faFacebook,
    faFacebookMessenger,
    faJs,
    faNodeJs,
    faJenkins,
    faWordpress,
    faNode
} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'

class FontAwesomeIconRegistry {

    static register() {
        library.add(
            faCode,
            faGithub,
            faLinkedin,
            faBitbucket,
            faAngular,
            faReact,
            faJava,
            faPhp,
            faLaravel,
            faPython,
            faCss3,
            faHtml5,
            faAndroid,
            faFacebook,
            faFacebookMessenger,
            faJs,
            faNodeJs,
            faJenkins,
            faWordpress,
            faNode,
        );
    }
}

export default FontAwesomeIconRegistry;
