import React from "react";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import SectionHeader from "../layout/SectionHeader";
import Section from "../layout/Section";
import SectionContent from "../layout/SectionContent";
import PortfolioItem from "../portfolio/PortfolioItem";
import HeaderDivider from "../common/HeaderDivider";

const styles = theme => ({});

const soloItems = [
    {
        name: 'E-Commerce Admin Panel',
        description: 'Admin Panel is an e-commerce solution for managing orders, create reports, invoicing, ' +
            'digital marketing and composing landing pages for products. \n Build with microservice architecture. This project currently ' +
            'consist by several loosely coupled services such as a mailing service, a pdf service, and a service responsible for landing pages. \n' +
            'Some of the keystones of the project: \n' +
            'Ability to build landing pages for products, using a drag n drop UI. \n' +
            'Every product page is hosted as separate page to a different domain. \n' +
            'Email/Sms marketing. \n' +
            'Courier delivery tracking.',
        previewImgSrc: '/img/projects/admin-panel/dashboard.png',
        technologies: ['PHP', 'Laravel', 'Vanilla Javascript', 'jQuery', 'PostgreSQL'],
        images: [
            '/img/projects/admin-panel/dashboard.png',
            '/img/projects/admin-panel/dashboard.png',
            '/img/projects/admin-panel/dashboard.png',
            '/img/projects/admin-panel/dashboard.png',
            '/img/projects/admin-panel/dashboard.png',
            '/img/projects/admin-panel/dashboard.png',
            '/img/projects/admin-panel/dashboard.png',
            '/img/projects/admin-panel/dashboard.png',
            '/img/projects/admin-panel/dashboard.png',
        ]
    }
];

class Portfolio extends React.Component {

    render() {
        return (
            <Section>
                <SectionHeader headerText={'Portfolio'}/>
                <SectionContent>
                    <HeaderDivider header={'Solo Projects'}/>
                    {soloItems.map(item => <PortfolioItem item={item}/>)}

                </SectionContent>
            </Section>
        );
    }
}

Portfolio.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Portfolio);
