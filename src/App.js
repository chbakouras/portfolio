import 'typeface-roboto'
import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';
import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import {withStyles} from "@material-ui/core/styles/index";
import AppLayout from "./component/layout/AppLayout";
import Profile from "./component/profile/Profile";
import AppMenu from "./component/menu/AppMenu";
import AboutMe from "./component/about-me/AboutMe";
import scrollToComponent from 'react-scroll-to-component';
import Contact from "./component/contact/Contact";
import Skills from "./component/skills/Skills";
import Portfolio from "./component/portfolio/Portfolio";
import Resume from "./component/resume/Resume";

const theme = createMuiTheme({
    drawerWidth: 200,
});

class App extends Component {

    render() {
        const scrollConfig = {
            offset: 0,
            align: 'top',
            duration: 1500
        };

        const drawerContent =
            <div>
                <Profile
                    firstName={'Chrisostomos'}
                    lastName={'Bakouras'}
                    profileImageSrc={'/img/chbakouras.jpeg'}
                    subheading={'Full stack developer'}/>
                <AppMenu
                    onAboutMeClick={() => scrollToComponent(this.aboutMeSection, scrollConfig)}
                    onSkillsClick={() => scrollToComponent(this.skillsSection, scrollConfig)}
                    onPortfolioClick={() => scrollToComponent(this.portfolioSection, scrollConfig)}
                    onResumeClick={() => scrollToComponent(this.resumeSection, scrollConfig)}
                    onContactClick={() => scrollToComponent(this.contactSection, scrollConfig)}/>
            </div>;

        return (
            <MuiThemeProvider theme={theme}>
                <AppLayout drawerContent={drawerContent} headerText={''}>
                    <section ref={(section) => this.aboutMeSection = section}>
                        <AboutMe/>
                    </section>
                    <section ref={(section) => this.skillsSection = section}>
                        <Skills/>
                    </section>
                    <section ref={(section) => this.portfolioSection = section}>
                        <Portfolio/>
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
