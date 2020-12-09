import React from "react";

import Container from "components/Container";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Container type="content">
        <div className="dashboard-grid">
          <div className="items">
            <div className="total">
              <p>0</p>
              <span>Total Test</span>
            </div>
            <div className="per1m">
              <p>0</p>
              <span>Per 1 Million</span>
            </div>
          </div>
          <div className="items">
            <div className="total">
              <p>0</p>
              <span>Total Cases</span>
            </div>
            <div className="per1m">
              <p>0</p>
              <span>Per 1 Million</span>
            </div>
          </div>
          <div className="items">
            <div className="total">
              <p>0</p>
              <span>Total Deaths</span>
            </div>
            <div className="per1m">
              <p>0</p>
              <span>Per 1 Million</span>
            </div>
          </div>
          <div className="items">
            <p>0</p>
            <span>Active</span>
          </div>
          <div className="items">
            <p>0</p>
            <span>Critical</span>
          </div>
          <div className="items">
            <p>0</p>
            <span>Recovered</span>
          </div>
          <div className="items">
            <span>Last Updated: NaN AM</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
