import React from "react";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import PortfolioItemPreview from "./PortfolioItemPreview";
import PortfolioItemDialog from "./PortfolioItemDialog";

const styles = theme => ({
    root: {
        margin: '20px 0',
    },
    image: {
        width: '100%',
        margin: '20px 0'
    },
    imageWrapper: {
        margin: 20
    },
});

class PortfolioItem extends React.Component {

    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const {classes, item} = this.props;
        return (
            <div className={classes.root}>
                <PortfolioItemPreview item={item} onClickOpen={this.handleClickOpen}/>
                <PortfolioItemDialog projectName={item.name}
                                     open={this.state.open}
                                     onClose={this.handleClose}>
                    <PortfolioItemPreview item={item}/>
                    <div className={classes.imageWrapper}>
                        {item.images.map((src, i) => <img key={i} src={src} alt={`${item.name} ${i+1}`} className={classes.image}/>)}
                    </div>
                </PortfolioItemDialog>
            </div>
        );
    }
}

PortfolioItem.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(PortfolioItem);
