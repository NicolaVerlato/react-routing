import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

function Root(params) {
    return(
        <Fragment>
            <MainNavigation />
            <Outlet />
        </Fragment>
    )
}

export default Root;