import React from "react";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import Paper from "@material-ui/core/Paper/Paper";
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import Chip from "@material-ui/core/Chip/Chip";
import NewLineToBr from "../../service/NewLineToBr";

const styles = theme => ({
    paper: {
        overflow: 'hidden',
        margin: '0 10px'
    },
    contentWrapper: {
        width: '100%',
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    title: {},
    description: {
        flex: 1,
    },
    button: {
        maxWidth: 250,
        width: '100%',
        marginLeft: 'auto',
        [theme.breakpoints.down('md')]: {
            maxWidth: 'inherit',
        },
    },
    chip: {
        margin: theme.spacing.unit,
    },
});

class PortfolioItemPreview extends React.Component {

    render() {
        const {classes, item, onClickOpen} = this.props;

        return (
            <Paper className={classes.paper}>
                <Grid container spacing={16}>
                    <Grid item xs={12} md={6}>
                        <div>
                            <img src={item.previewImgSrc} alt={item.name} width={'100%'}/>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} style={{display: 'flex'}}>
                        <div className={classes.contentWrapper}>
                            <Typography className={classes.title} component="h2" variant="h5" gutterBottom>
                                {item.name}
                            </Typography>

                            <div>
                                {item.technologies.map((technology, i) =>
                                    <Chip key={i} label={technology} className={classes.chip}/>
                                )}
                            </div>

                            <Typography className={classes.description} variant="body1" gutterBottom>
                                {NewLineToBr.render(item.description)}
                            </Typography>

                            {PortfolioItemPreview.renderMoreButton(onClickOpen, classes.button)}
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        );
    }

    static renderMoreButton(onClickOpen, buttonClass) {
        return onClickOpen
            ? <Button variant="contained"
                      color="primary"
                      className={buttonClass}
                      onClick={onClickOpen}>
                More
            </Button>
            : "";
    }
}

PortfolioItemPreview.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    onClickOpen: PropTypes.func,
};

export default withStyles(styles, {withTheme: true})(PortfolioItemPreview);
