import React, { Component } from 'react';
import { connect } from 'react-redux';

class systemDataList extends Component {
    renderList() {
        return this.props.systemdata.map( (sdata) => {
            return (
                <tr>
                    <td>{ sdata.id }</td>
                    <td>{ sdata.title }</td>
                    <td> { sdata.action } </td>
                    <td>{ sdata.id2 } </td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div class="row column">
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th width="200">ID</th>
                            <th>Title</th>
                            <th width="150">Action</th>
                            <th width="150">Second ID</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.renderList()}
                        </tbody>
                    </table>
                </div>
            </div>
    )
    }
}

function mapStateToProps(state) {
    return {
        systemdata: state.systemdata
    };
}

export default connect(mapStateToProps)(systemDataList);