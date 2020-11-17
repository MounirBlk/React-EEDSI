import * as React from 'react';
import { Grid, WithStyles } from '@material-ui/core';
import styles, { Styles } from './styles';
interface P {}
interface S {}

export class HeaderBar extends React.PureComponent<P & WithStyles<Styles>>{

    //Methode de lecture

    render(){
        const { classes } = this.props;
        return(
            <Grid container className={ classes.headerBar }>
                <Grid item>Logo</Grid>
                <Grid item>Menu</Grid>
            </Grid>
        )
    }
}