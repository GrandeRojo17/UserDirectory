import React, { Component } from 'react';
import API from '../utils/API'
export default class DataArea extends Component {

    state = {
        users: [{}],
        order: "descend",
        filteredUsers: [{}]
    }
    headings = [
        { name: "Image", width: "10%" }, {}, {},
    ]



    ComponentDidMount() {
        API.getUsers().then(results => {
            this.setState({ users: results.data.results, filteredUsers: results.data.results });

        });

    }






    render() {
        return (
            <>
                <Nav handleSearchChange={this.handleSearchChange} />
                <div className="data-area"> <p>Hello</p>
                    {/* <DataTable headings={this.headings}
                        users={this.state.filteredUsers}
                        handleSort={this.handleSort}
                    /> */}
                </div>
            </>
        )
    };
}

