import React, { Component } from 'react';
import './index.css';
import ItemPortfolio from '../../components/ItemPortfolio';
import { cases } from '../../data/Copy';

class ViewInfo extends Component {

  constructor(props) {
    super(props);
    document.body.style.background = '#000';

  }

  componentDidMount() {
    document.getElementsByClassName("App-title")[0].style.color = '#333';
    [...document.getElementsByClassName("bm-burger-bars")].forEach((element) => {
      element.style.background = '#333';
    });
  }

  renderCases() {
    return cases.map((caseItem) => {
      return <ItemPortfolio item={caseItem}/>;
    });
  }

  render() {
    return (
      <div className="view-info">
        <div className="container-intro">
            <h1>WE ARE STOFKAT_</h1>
        </div>
        <div className="container-intro-text">
          We are Stofkat. Digital experts for projects that strive to be more than just a simple website.
          Instead of telling you what we do, we much rather show you.
        </div>
        <div className="container-cases">
        {this.renderCases()}
        </div>
      </div>
    );
  }
}

export default ViewInfo;
