import React, { Component } from 'react';

export class FetchData extends Component {
    displayName = FetchData.name

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true, requestFailed: false };

        fetch('http://dummy.restapiexample.com/api/v1/employees')
            .then(response => response.json())
            .then(data => {
                this.setState({ forecasts: data, loading: false });
            })         
           
;
    }

    static renderForecastsTable(forecasts) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>employee_name. (C)</th>
                        <th>employee_salary. (F)</th>
                        <th>employee_age</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.id}>
                            <td>{forecast.id}</td>
                            <td>{forecast.employee_name}</td>
                            <td>{forecast.employee_salary}</td>
                            <td>{forecast.employee_age}</td>

                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderForecastsTable(this.state.forecasts);
       
        return (
            <div>
                <h1>Dummy Employee</h1>
                <p>Dummy API</p>
                {contents}
            </div>
        );

    }
}