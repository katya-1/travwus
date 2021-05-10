import React from "react";
import * as Api from "typescript-fetch-api";
import { withRouter } from "react-router";
import moment from "moment";
import Moment from "react-moment";

const api = new Api.DefaultApi();

class Today extends React.Component {
  constructor(props) {
    super(props);
    const id = this.props.match?.params.id || moment().format("YYYY-MM-DD");
    console.log(id);
    this.state = {
      todays: [],
      targetDate: id,
    };
    this.handleReload = this.handleReload.bind(this);
    this.handleReload();
  }

  async handleReload(today) {
    const response = await api.todays({
      date: this.state.targetDate,
    });
    this.setState({ todays: response });
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.handleReload}>Reload</button> */}
        <h2>Our favorite weather</h2>
        <h3>
          Weather on{" "}
          <Moment format="YYYY/MM/DD">{this.state.targetDate}</Moment>{" "}
        </h3>
        <ul>
          {this.state.todays.map((today) => (
            <div class="photo-txt" key={today.id}>
              <p>At the address {today.location}</p>
               on {today.date}
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(Today);
