import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory, Link } from 'react-router';
import classNames from 'classnames/bind';

import Skillit from '../components/Skillit';
import img_1 from '../images/list_img_1.png';
import img_2 from '../images/list_img_2.png';
import img_3 from '../images/list_img_3.png';
import img_4 from '../images/list_img_4.png';
import styles from '../css/pages/skilllist';

const cx = classNames.bind(styles);
const skills = [
    {title:"BROOKLYM PARKOUR", content:"Like straight lines and jumping, hate two dimensional travel? PARKOUR!", img:img_1},
    {title:"OIL PAINT & CHICKEN", content:"Make oil paint, make a canvas, and go home with a piece of original art. Chicken included.", img:img_2},
    {title:"ICE CREAM SOCIALISM", content:"Socialist Ice Cream Sundae Social on Sundays", img:img_3},
    {title:"CARTOON & POPCORN PARTY", content:"Learn the horrific pains and tedium of animation, then showcase what you've done.", img:img_4}
];

export default class SkillList extends Component {
  constructor(props) {
    super(props);
  }

  onSelect = (id) => {
    browserHistory.push(`/skill-detail`);
  }

  render() {    
    return (
      <div className={cx('skill-list')}>
        
        <div className={cx('skilllist-header')}>SKILLITS ON OFFER</div>

        <div className={cx('sec-list')}>
          { 
            skills.map((skill, idx) => {
              return <Skillit key={`skillitem_${idx}`} skill={skill} onSelect={this.onSelect} />
            }) 
          }
        </div>

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
