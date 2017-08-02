import React, { Component } from 'react';
import Page from './Page';
import HomeContainer from '../containers/Home';

class Home extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Home | Skillit';
  };

  pageMeta = () => {
    return [
      { name: 'description', content: 'Home page' }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <HomeContainer {...this.props} />
      </Page>
    );
  }
}

export default Home;

