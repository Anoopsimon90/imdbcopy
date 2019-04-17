import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormControl, Button, Form, Table } from 'react-bootstrap';

export class Movies extends Component {
    constructor(props) {
        super(props);
    };

    static searchMovie() {
        fetch('http://localhost:61443/api/movies/Ter')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                return data;

            })
    }
    render() {

        return (

            <div>
                <Table data={Movies.searchMovie()}>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <tr> <td> </td></tr>
                    </tr>
                </Table>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                    <Button type="submit">Submit</Button>
                </Form>
            </div>

        );
    }
}
