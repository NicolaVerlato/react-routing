import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import classes from './Root.module.css'

function Root(params) {
    return(
        <Fragment>
            <MainNavigation />
            <main className={classes.content}>
                <Outlet />
            </main>
        </Fragment>
    )
}

export default Root;