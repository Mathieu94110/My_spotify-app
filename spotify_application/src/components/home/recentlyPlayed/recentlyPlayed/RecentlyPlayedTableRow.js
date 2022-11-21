import React, { Component } from "react";

class RecentlyPlayedTableRow extends Component {
  render() {
    const row = this.props.row;
    return (
      <tr>
        {row && row.map((val) => (
          <td>{val}</td>
        ))}
      </tr>
    );
  }
}

export default RecentlyPlayedTableRow;
