import React, { useState, useEffect } from "react";
import { Table, Button, Header, Icon } from "semantic-ui-react";
import JobPostingService from "../services/JobPostingService";

export default function JobPostingList() {
    const [postings, setPostings] = useState([]);
    useEffect(() => {
        let jobPostingService = new JobPostingService();
        jobPostingService.getJobPosting().then(result => setPostings(result.data.data));
    }, []);
    return (
        <div>
            <Header as="h2">
                <Icon name="list alternate outline" />
                <Header.Content>Job Posting List</Header.Content>
            </Header>
            <Table color="black" key="black">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Job Title</Table.HeaderCell>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Open Position Count</Table.HeaderCell>
                        <Table.HeaderCell>Deadline</Table.HeaderCell>
                        <Table.HeaderCell>Job Details</Table.HeaderCell>
                        <Table.HeaderCell>Detail</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {postings.map((posting) => (
                        <Table.Row key={posting.id}>
                            <Table.Cell>{posting.jobPosition.position}</Table.Cell>
                            <Table.Cell>{posting.employer.companyName}</Table.Cell>
                            <Table.Cell>{posting.city.city}</Table.Cell>
                            <Table.Cell>{posting.numberOfOpenPositions}</Table.Cell>
                            <Table.Cell>{posting.lastApplydate}</Table.Cell>
                            <Table.Cell>{posting.jobDetails.toString()}</Table.Cell>
                            <Table.Cell>
                                <Button>View</Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>

    )
}