
import React from 'react'
import Navi from "./Navi"
import Section from './Section'
import SideBar from './SideBar'
import { Grid } from "semantic-ui-react";

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <SideBar />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Section />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
