import React from "react";
import PropTypes from 'prop-types';
import PDFObject from 'pdfobject';
import Button from "@material-ui/core/Button/Button";
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = theme => ({
    buttonStyle: {
        textAlign: 'center',
    }
});

class PdfViewer extends React.Component {

    componentDidMount() {
        const {pdfUrl, containerId} = this.props;

        if (PDFObject.supportsPDFs) {
            PDFObject.embed(pdfUrl, `#${containerId}`);
        }
    }

    render() {
        const {classes, pdfUrl, width, height, containerId, fallbackDownloadButtonText} = this.props;

        return PDFObject.supportsPDFs
            ? <div style={{width, height}} id={containerId}/>
            : <div className={classes.buttonStyle}>
                <Button variant="contained" color="primary" className={classes.button} href={pdfUrl}>
                    {fallbackDownloadButtonText || "Download Pdf"}
                </Button>
            </div>
    }
}

PdfViewer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    pdfUrl: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    fallbackDownloadButtonText: PropTypes.string,
    containerId: PropTypes.string,
};

PdfViewer.defaultProps = {
    width: '100%',
    height: '100%',
    containerId: 'pdf-viewer',
};

export default withStyles(styles, {withTheme: true})(PdfViewer);
