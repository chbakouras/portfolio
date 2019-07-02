import 'typeface-roboto'
import React, {Component} from 'react';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import {withStyles} from "@material-ui/core/styles/index";
import AppLayout from "./component/layout/AppLayout";
import Profile from "./component/menu/Profile";
import AppMenu from "./component/menu/AppMenu";
import About from "./component/section/About";
import scrollToComponent from 'react-scroll-to-component';
import Contact from "./component/section/Contact";
import Skills from "./component/section/Skills";
import Portfolio from "./component/section/Portfolio";
import Resume from "./component/section/Resume";
import blue from '@material-ui/core/colors/blue';
import {isWidthDown} from "@material-ui/core/es/withWidth";
import withWidth from "@material-ui/core/es/withWidth/withWidth";
import Hidden from "@material-ui/core/Hidden/Hidden";
import profileData from "./data/profile";

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
    typography: {
        useNextVariants: true,
    },
    drawerWidth: 200,
    sectionHeaderStyle: {
        backgroundColor: '#ffffff',
        color: '#000000',
    }
});

const defaultScrollConfig = {
    offset: 0,
    align: 'top',
    duration: 400
};

class App extends Component {

    static scrollToSection(component, onDrawerToggle, width) {
        let scrollConfig;
        if (isWidthDown('sm', width)) {
            onDrawerToggle();
            scrollConfig = {...defaultScrollConfig, offset: -60};
        } else {
            scrollConfig = defaultScrollConfig;
        }

        scrollToComponent(component, scrollConfig);
    }

    render() {
        const {width} = this.props;

        const drawerContent = onDrawerToggle =>
            <div>
                <Hidden smDown>
                    <Profile
                        firstName={profileData.firstName}
                        lastName={profileData.lastName}
                        profileImageSrc={profileData.profileImageSrc}
                        subheading={profileData.subheading}/>
                </Hidden>
                <AppMenu
                    onAboutMeClick={() => App.scrollToSection(this.aboutMeSection, onDrawerToggle, width)}
                    onSkillsClick={() => App.scrollToSection(this.skillsSection, onDrawerToggle, width)}
                    onPortfolioClick={() => App.scrollToSection(this.portfolioSection, onDrawerToggle, width)}
                    onResumeClick={() => App.scrollToSection(this.resumeSection, onDrawerToggle, width)}
                    onContactClick={() => App.scrollToSection(this.contactSection, onDrawerToggle, width)}/>
            </div>;

        return (
            <MuiThemeProvider theme={theme}>
                <AppLayout drawerContent={drawerContent} headerText={''}>
                    <section ref={(section) => this.aboutMeSection = section}>
                        <About/>
                    </section>
                    <section ref={(section) => this.portfolioSection = section}>
                        <Portfolio/>
                    </section>
                    <section ref={(section) => this.skillsSection = section}>
                        <Skills/>
                    </section>
                    <section ref={(section) => this.resumeSection = section}>
                        <Resume/>
                    </section>
                    <section ref={(section) => this.contactSection = section}>
                        <Contact/>
                    </section>
                </AppLayout>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired,
};

export default compose(withStyles(theme), withWidth())(App);
