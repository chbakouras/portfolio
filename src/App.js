import 'typeface-roboto'
import React, {Component} from 'react';
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
        const drawerContent = onDrawerToggle =>
            <div>
                <Profile
                    firstName={'Chrysostomos'}
                    lastName={'Bakouras'}
                    profileImageSrc={'/img/chbakouras.jpg'}
                    subheading={'Full stack developer'}/>
                <AppMenu
                    onAboutMeClick={() => App.scrollToSection(this.aboutMeSection, onDrawerToggle, this.props.width)}
                    onSkillsClick={() => App.scrollToSection(this.skillsSection, onDrawerToggle, this.props.width)}
                    onPortfolioClick={() => App.scrollToSection(this.portfolioSection, onDrawerToggle, this.props.width)}
                    onResumeClick={() => App.scrollToSection(this.resumeSection, onDrawerToggle, this.props.width)}
                    onContactClick={() => App.scrollToSection(this.contactSection, onDrawerToggle, this.props.width)}/>
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
};

export default withStyles(theme)(App);
