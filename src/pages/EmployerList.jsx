import React, { useState, useEffect } from "react";
import EmployerService from '../services/EmployerService';
import { Table, Header, Icon, Button } from "semantic-ui-react";


export default function Employer() {
    const [companies, setCompanies] = useState([]);
    let employerService = new EmployerService();
    useEffect(() => {
        employerService.getCompany().then((result) => setCompanies(result.data.data));
    }, [])

    return (

        <div>
            <Header as="h2">
                <Icon name="list alternate outline" />
                <Header.Content>Company List</Header.Content>
            </Header>
            <Table color="green" key="green">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>Website</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Phone Number</Table.HeaderCell>
                        <Table.HeaderCell>Detail</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {companies.map(company => (
                        <Table.Row key={company.id}>
                            <Table.Cell>{company.companyName}</Table.Cell>
                            <Table.Cell>{company.webAdres}</Table.Cell>
                            <Table.Cell>{company.email}</Table.Cell>
                            <Table.Cell>{company.phoneNumber}</Table.Cell>
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