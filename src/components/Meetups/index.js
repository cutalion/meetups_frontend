import React, { Component } from 'react';
import Meetup from "../Meetup";
import { Query } from "react-apollo";
import MeetupsQuery from "../../queries/Meetups";
import './Meetups.css';

class Meetups extends Component {
  render() {
    return (
      <Query query={MeetupsQuery}>
        {({loading, error, data}) => {
          if (loading) return '';
          if (error) return 'Could not load meetups.'

          console.log(data.meetups[0])

          return (
            <div className="Meetups">
              {this.renderMeetups(data.meetups)}
            </div>
          )
        }}
      </Query>
    )
  }

  renderMeetups(meetups) {
    return meetups.map((meetup) => {
      return <Meetup key={`meetup-${meetup.id}`} meetup={meetup} />
    })
  }
}

export default Meetups;
