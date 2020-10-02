import React, { Component } from "react";
import styles from "./weather.module.css";
import cx from "classnames";

const api = {
  key: "19f53653ec0d1758abd52a731f9ab8e1",
  base: "api.openweathermap.org/data/2.5/",
};
export class Covid extends Component {
  render() {
    return (
      <div className={cx(styles.app, styles.warm)}>
        <main>
          <div className={styles.searchBox}>
            <input
              type="text"
              className={styles.searchBar}
              placeholder="Search..."
            />
          </div>
          <div className="locationBox">
            <div className="location">Los Angeles, CA</div>
            <div className="date">10/1/2020</div>
          </div>
        </main>
      </div>
    );
  }
}

export default Covid;
