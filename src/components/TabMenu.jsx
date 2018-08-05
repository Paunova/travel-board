import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs, { Tab } from '@material-ui/core/Tabs';

const styleSheet = createStyleSheet('CenteredTabs', theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing.unit * 3
    }
}));

class CenteredTabs extends Component {
    state = {
        index: 0
    };

    handleChange = (event, index) => {
        this.setState({ index });
    };

    render() {
        const classes = this.props.classes;

        return (
            <Paper className={classes.root}>
                <Tabs
                    index={this.state.index}
                    onChange={this.handleChange}
                    indicatorColor="#878289"
                    textColor="#878289"
                    centered
                >
                    <Tab label="Visited places" />
                    <Tab label="Planned trips" />
                    <Tab label="Wishlist" />
                    <Tab label="Explore world map" />
                </Tabs>
            </Paper>
        );
    }
}

CenteredTabs.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(CenteredTabs);