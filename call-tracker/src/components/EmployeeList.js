import React, { Component } from 'react';
import data from '../data/data'

export default class EmployeeList extends Component {
    render() {
        return (
            <div>
                <p>Welcome to Employees Component!!</p>
                <p>{data.number1}</p>
            </div>
        )
    }
}