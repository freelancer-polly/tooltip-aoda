import React, { Component } from 'react';

export default class RenderMemberForm extends Component {
    componentDidMount() {
        const whichId = `help-link-${this.props.details._id}`;
        console.log("whichId ", whichId);
        console.log("document.getElementById(whichId) ", document.getElementById(whichId));
        document.getElementById(whichId).focus();
    }

    render() {
        const { name, _id, index } = this.props.details;

        return (
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">Edit details for <span className="text-primary">{name}</span></h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <a
                        id={`help-link-${_id}`}
                        className="btn btn-info btn-sm"
                        aria-label={`help tooltip The ability to change ${name}'s first name online is currently unavailable. To make this change please call us at 9231808302`}
                        tabindex="0"
                        role="button"
                    >
                        <span className="sr-only">{index} help tooltip The ability to change your first name online is currently unavailable. To make this change please call us at 9231808302</span>
                        <span className="material-icons align-bottom ml-1" aria-hidden="true">help</span>
                    </a>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        );
    }
}
