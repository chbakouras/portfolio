import React from "react";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import SectionHeader from "../layout/SectionHeader";
import Section from "../layout/Section";
import SectionContent from "../layout/SectionContent";
import PdfViewer from "../common/PdfViewer";

const styles = theme => ({
    root: {
        // flexGrow: 1,
    },
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

class Resume extends React.Component {

    render() {
        return (
            <Section>
                <SectionHeader headerText={'Resume'}/>
                <SectionContent>
                    <PdfViewer pdfUrl={'/pdf/resume.pdf'} height={'40rem'} fallbackDownloadButtonText={'Download my Resume'} />
                </SectionContent>
            </Section>
        );
    }
}

Resume.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Resume);
