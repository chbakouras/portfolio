import React from "react";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import SectionHeader from "../layout/SectionHeader";
import Section from "../layout/Section";
import SectionContent from "../layout/SectionContent";
import PortfolioItem from "../portfolio/PortfolioItem";
import HeaderDivider from "../common/HeaderDivider";
import portfolioData from "../../data/portfolio";

const styles = theme => ({});


class Portfolio extends React.Component {

    render() {
        return (
            <Section>
                <SectionHeader headerText={'Portfolio'}/>
                <SectionContent>
                    <HeaderDivider header={'Solo Projects'}/>
                    {portfolioData.soloItems.map(item => <PortfolioItem item={item} key={item.name}/>)}

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
