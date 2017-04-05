import React from 'react';

import TimeProgressBar from './TimeProgressBar';
import Expander from './Expander';
import Issue from '../containers/Issue';
import { formatHours } from '../utils';


class Member extends React.Component {
    render() {
        return (
            <div className="member-issues">
                <div className={this.props.className}>
                    <img src={this.props.member.avatar_url} className="avatar"/>
                    <div className="name">{this.props.member.name}</div>
                    <div className="spentHours">{formatHours(this.props.spentHours)}</div>
                    <div className="estimateHours">{formatHours(this.props.estimateHours)}</div>
                    <div className="capacity">{formatHours(this.props.capacity)}</div>
                    <TimeProgressBar current={this.props.spentHours} max={this.props.capacity} className="small-progress"/>
                    <Expander onClick={() => this.props.onExpandClick(this.props.member.id)} expanded={this.props.member.expand}/>
                </div>
                <div>
                    {this.props.member.expand ? this.props.issues.map((issue) => <Issue issue={issue}/>) : []}
                </div>
            </div>
        );
    }
}

export default Member;
