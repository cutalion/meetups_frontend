import React, { Component } from 'react';
import './Meetup.css';

class Meetup extends Component {
  render() {
    const { meetup } = this.props;

    return (
      <div className="Meetup">
        <header className="Meetup__header">
          <h1 className="Meetup__title">{meetup.date}</h1>
        </header>

        <p className="Meetup__description">
          {meetup.description}
        </p>

        <h3 className="Meetup__talks-title">Talks:</h3>

        <ul className="Meetup__talks">
          {this.renderTalks(meetup.talks)}
        </ul>
      </div>
    );
  }

  renderTalks(talks) {
    return talks.map(talk => {
      return <li key={`talk-${talk.id}`} className="Meetup__talk">{talk.title}</li>
    })
  }
}

export default Meetup;
