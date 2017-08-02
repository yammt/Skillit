import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory, Link } from 'react-router';
import classNames from 'classnames/bind';

import img_1 from '../images/home_img_1.jpg';
import img_2 from '../images/home_img_2.png';
import img_3 from '../images/home_img_3.png';
import img_4 from '../images/home_img_4.png';
import styles from '../css/pages/home';

const cx = classNames.bind(styles);

export default class Home extends Component {
  goSkillList = () => {
    browserHistory.push(`/skill-list`);
  }

  render() {    
    return (
      <div className={cx('home')}>
        <div className={cx('home-header')}>
          <img className={cx('img-1')} src={img_1} />
          <div className={cx('header-text-1')}>WELCOME TO</div>
          <div className={cx('header-text-2')}>Skillit</div>
        </div>

        <div className={cx('sec-1')}>
          <h3>FIRST TIME?</h3>
          <p>Awesome, you're gonna love it.</p>
          <button className={cx('btn-join')} onClick={this.goSkillList}>JOIN THE PARTY</button>
          <p>Learn More</p>
          <img className={cx('img-2')} src={img_2} />
        </div>

        <div className={cx('sec-2')}>
          <div className={cx('sec-title')}>WTF IS SKILLIT?</div>
          <p>Skillit is a bunch of vagabonds,</p>
          <p>derelicts, ruffians, and dilletantes</p>
          <p>forging a community of doers.</p>
        </div>  
        
        <img className={cx('img-3')} src={img_3} />

        <div className={cx('sec-title')}>WHAT CAN YOU DO???</div>
        
        <ul className={cx('sec-3')}>
          <li>Find your inner matador</li>
          <li>Do more than #Netflixandchill</li>
          <li>Leave your significant other to pursue caligraphy</li>
          <li>Learn slide guitar better than your annoying friend Brian</li>
          <li>Build a following</li>
          <li>Seem cool</li>
          <li>Prove your bastard father wrong</li>
        </ul>
        
        <button className={cx('btn-find')} onClick={this.goSkillList}>FIND A SKILLIT NOW</button>

        <img className={cx('img-4')} src={img_4} />

        <div className={cx('contact-div')}>
          <div className={cx('sec-title')}>GET IN TOUCH!</div>
          <p>west@skillit.xyz</p>
        </div>

        <div className={cx('home-footer')}>
          <p>for New Yorkers by New Yorkers</p>
          <p>Skillit © 2017</p>
        </div>
      
      </div>
    );
  }
}
