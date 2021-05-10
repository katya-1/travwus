import React from "react";
import * as Api from "typescript-fetch-api";
import { withRouter } from "react-router";
import moment from "moment";
import Moment from "react-moment";

const api = new Api.DefaultApi();

class CurrentEventsProgress extends React.Component {
  constructor(props) {
    super(props);
    const id = this.props.match?.params.id || moment().format("YYYY-MM-DD");
    console.log(id);
    this.state = {
      events: [],
      targetDate: id,
    };
    this.handleReload = this.handleReload.bind(this);
    this.handleReload();
  }

  async handleReload(event) {
    const response = await api.events({
      date: this.state.targetDate,
    });
    this.setState({ events: response });
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default withRouter(CurrentEventsProgress);
