import React from "react";
import SectionHeader from "../layout/SectionHeader";
import Section from "../layout/Section";
import SectionContent from "../layout/SectionContent";
import SkillBadge from "../common/SkillBadge";
import Grid from "@material-ui/core/Grid/Grid";
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/es/styles/withStyles";
import HeaderDivider from "../common/HeaderDivider";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

class Skills extends React.Component {

    render() {
        const {classes} = this.props;
        const languageBadgeSize = 110;
        const xs = 4;
        const sm = 'auto';
        const md = 'auto';
        const lg = 'auto';

        return (
            <Section>
                <SectionHeader headerText={'Skills'}/>
                <SectionContent>
                    <Grid container className={classes.root} spacing={16}>
                        <Grid item xs={12}>
                            <HeaderDivider header={'Programming Languages'}/>

                            <Grid container justify="center" spacing={16}>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Java'} imageSrc={'/img/skills/java/java.png'}
                                                size={languageBadgeSize}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'PHP'} imageSrc={'/img/skills/php/php.png'}
                                                size={languageBadgeSize}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Javascript'} imageSrc={'/img/skills/javascript/javascript.png'}
                                                size={languageBadgeSize}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Typescript'} imageSrc={'/img/skills/javascript/typescript.png'}
                                                size={languageBadgeSize}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Python'} imageSrc={'/img/skills/python.png'}
                                                size={languageBadgeSize}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <HeaderDivider header={'Front-End'}/>

                            <Grid container justify="center" spacing={16}>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'HTML'} imageSrc={'/img/skills/html.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'CSS'} imageSrc={'/img/skills/css.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Angular'} imageSrc={'/img/skills/javascript/angular.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'React'} imageSrc={'/img/skills/javascript/react.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'jQuery'} imageSrc={'/img/skills/javascript/jquery.gif'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'GWT'} imageSrc={'/img/skills/java/gwt.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Sencha GXT'} imageSrc={'/img/skills/java/sencha-gxt.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Android'} imageSrc={'/img/skills/android.png'}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <HeaderDivider header={'Back-End'}/>

                            <Grid container justify="center" spacing={16}>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'NodeJs'} imageSrc={'/img/skills/javascript/node.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Spring Framework'}
                                                imageSrc={'/img/skills/java/spring-framework.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Spring Boot'} imageSrc={'/img/skills/java/spring-boot.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Spring Cloud'} imageSrc={'/img/skills/java/spring-cloud.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Java EE'} imageSrc={'/img/skills/java/java-ee.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Laravel'} imageSrc={'/img/skills/php/laravel.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Symfony'} imageSrc={'/img/skills/symfony.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Django'} imageSrc={'/img/skills/django.png'}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <HeaderDivider header={'Persistence'}/>

                            <Grid container justify="center" spacing={24}>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'PostgreSQL'} imageSrc={'/img/skills/database/postgresql.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'mySQL'} imageSrc={'/img/skills/database/mysql.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'MongoDB'} imageSrc={'/img/skills/database/mongodb.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Redis'} imageSrc={'/img/skills/database/redis.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'ElasticSearch'} imageSrc={'/img/skills/elasticsearch.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'RabbitMQ'} imageSrc={'/img/skills/rabbitmq.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Solr'} imageSrc={'/img/skills/solr.png'}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <HeaderDivider header={'Toolset'}/>

                            <Grid container justify="center" spacing={16}>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Vavr'} imageSrc={'/img/skills/java/vavr.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Hibernate'} imageSrc={'/img/skills/java/hibernate.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Atomikos'} imageSrc={'/img/skills/java/atomikos.gif'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Grandle'} imageSrc={'/img/skills/java/grandle.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Maven'} imageSrc={'/img/skills/java/maven.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Composer'} imageSrc={'/img/skills/composer.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Wordpress'} imageSrc={'/img/skills/wordpress.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Jenkins'} imageSrc={'/img/skills/jenkins.png'}/>
                                </Grid>
                                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                    <SkillBadge skill={'Linux'} imageSrc={'/img/skills/linux.png'}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </SectionContent>
            </Section>
        );
    }
}

Skills.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Skills);
