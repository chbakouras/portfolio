import React from "react";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/es/Typography/Typography";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";

const styles = theme => ({
    card: {
        maxWidth: 150,
    },
    media: {
        objectFit: 'cover',
    },
    cardContent: {
        textAlign: 'center'
    },
});

class SkillBadge extends React.Component {

    render() {
        const {classes, imageSrc, skill} = this.props;
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={skill}
                        className={classes.media}
                        image={imageSrc}
                        title={skill}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="title" component="h2">
                            {skill}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

SkillBadge.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    imageSrc: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
};

export default withStyles(styles, {withTheme: true})(SkillBadge);
