import React, { Component } from "react";

export default class Filter extends Component {
  state = {
    limit: 5,
    sort: "asc"
  };

  onChange = field => e => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="number"
          min="0"
          value={this.state.limit}
          onChange={this.onChange("limit")}
        />
        <select value={this.state.sort} onChange={this.onChange("sort")}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <button
          onClick={() =>
            this.props.getFiltered(this.state.limit, this.state.sort)
          }
        >
          Filter
        </button>
      </div>
    );
  }
}
