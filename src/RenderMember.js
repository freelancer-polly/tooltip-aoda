import React, { Component, Fragment } from 'react';

import RenderMemberForm from './RenderMemberForm';

export default class RenderMember extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userEditable: false
        }
    }

    toggleView = () => {
        this.setState({
            userEditable: !this.state.userEditable
        });
    }

    render() {
        const { name } = this.props.post;

        return (
            <Fragment>
                {!this.state.userEditable && <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-success btn-sm" onClick={this.toggleView}>Edit</button>
                    </div>
                </div>}
                {this.state.userEditable && <RenderMemberForm details={this.props.post} toggleView={this.toggleView} />}
            </Fragment>
        );
    }
}