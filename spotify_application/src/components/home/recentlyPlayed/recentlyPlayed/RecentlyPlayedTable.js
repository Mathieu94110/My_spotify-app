import React, { Component } from "react";
import RecentlyPlayedTableRow from "./RecentlyPlayedTableRow";

class RecentlyPlayedTable extends Component {
  render() {
    const heading = this.props.heading;
    const body = this.props.body;
    return (
      <table>
        <thead>
          <tr>
            {heading.map((head, index) => (
              <th key={index}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, index) => (
            <RecentlyPlayedTableRow row={row} key={index} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default RecentlyPlayedTable;
