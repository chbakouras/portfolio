import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from "@material-ui/core/es/List/List";
import PermIdentity from '@material-ui/icons/PermIdentity';
import Web from '@material-ui/icons/Web';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import Email from '@material-ui/icons/Email';
import ListItemLink from "./ListItemLink";
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import Icon from "@material-ui/core/es/Icon/Icon";
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = theme => ({
});

class AppMenu extends React.Component {

    render() {
        const {onAboutMeClick, onSkillsClick, onPortfolioClick, onResumeClick, onContactClick} = this.props;

        return (
            <div>
                <List>
                    <ListItemLink icon={<PermIdentity/>} primary={"About me"} onClick={onAboutMeClick}/>
                    <ListItemLink icon={<FontAwesomeIcon icon="code"/>} primary={"Skills"} onClick={onSkillsClick}/>
                    <ListItemLink icon={<Web/>} primary={"Portfolio"} onClick={onPortfolioClick}/>
                    <ListItemLink icon={<InsertDriveFile/>} primary={"Resume"} onClick={onResumeClick}/>
                    <ListItemLink icon={<Email/>} primary={"Contact"} onClick={onContactClick}/>
                </List>
            </div>
        );
    }
}

AppMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    onAboutMeClick: PropTypes.func.isRequired,
    onPortfolioClick: PropTypes.func.isRequired,
    onResumeClick: PropTypes.func.isRequired,
    onContactClick: PropTypes.func.isRequired,
    onSkillsClick: PropTypes.func.isRequired,
};

export default withStyles(styles, {withTheme: true})(AppMenu);