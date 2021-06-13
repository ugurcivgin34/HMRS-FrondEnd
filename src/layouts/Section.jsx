  
import React from 'react'
import { Grid, GridColumn } from "semantic-ui-react";
import CandidateList from '../pages/CandidateList';
import EmployerList from '../pages/EmployerList';
import EmployeeList from '../pages/EmployeeList';
import JobPostingList from '../pages/JobPostingList';
export default function Section() {
    return (
        <div>
            <Grid.Row>
                <GridColumn size={14}>
                    <JobPostingList />
                </GridColumn>
            </Grid.Row>

            <Grid.Row>
                <GridColumn size={14}>
                    <EmployeeList />
                </GridColumn>
            </Grid.Row>

            <Grid.Row>
                <GridColumn size={14}>
                    <EmployeeList />
                </GridColumn>
            </Grid.Row>

            <Grid.Row>
                <GridColumn size={14}>
                    <CandidateList />
                </GridColumn>
            </Grid.Row>
        </div>
    )
}