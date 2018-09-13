import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/es/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";

const styles = theme => ({});

class ListItemLink extends React.Component {

    render() {
        const {icon, onClick, primary, secondary} = this.props;
        return (
            <ListItem button onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText inset primary={primary} secondary={secondary}/>
            </ListItem>
        );
    }
}

ListItemLink.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string,
    icon: PropTypes.object,
};

export default withStyles(styles, {withTheme: true})(ListItemLink);
