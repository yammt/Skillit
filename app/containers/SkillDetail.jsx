import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { browserHistory, Link } from 'react-router';
import classNames from 'classnames/bind';

import Skillit from '../components/Skillit';
import img_1 from '../images/detail_img_1.png';
import img_2 from '../images/detail_img_2.png';
import img_3 from '../images/detail_img_3.png';
import img_4 from '../images/detail_img_4.png';
import img_5 from '../images/detail_img_5.png';
import styles from '../css/pages/skilldetail';

const cx = classNames.bind(styles);
const skill_detail = {
    title: 'ICE CREAM SOCIALISM', 
    host: 'AARON G.',
    neighborhood: 'Alphabet City',
    skillit_name: ['Soicalist Ice Cream Sundae', 'Social on Sundays'],
    cost: 15,
    duration: 2,
    occupancy: '4 Person Maximum',
    times: 'Sundays from 12pm - 1:30pm',
    email: 'aaron@gmail.com',
    description: ["Love ice cream and hat capitalism? here we will discuss Lenin, Marx and Ben and Jerry. We will learn the finer points of socialism, it's history, current state and how to make your own artisanal ice cream toppings.",
            "WARNING to those who have food allergies and to those who are resistsing the revolution: this is not for you.",
            "This class is taught in tandem by a self-taugh cook and a former college profession. The chef will show you how to prepare a classic fried banana sundae with thomemade hot fudge, whipped cream and flourless brownies. The profession will discuss the history and modern state of socialism.",
            "We are all entitled to Sprinkles!"]
};

export default class SkillDetail extends Component {
  constructor(props) {
    super(props);
  }

  backAction = () => {
    browserHistory.push('/skill-list');
  }

  openEmailEditor = (id) => {
    window.location.href = "mailto:west@skillit.xyz?subject=Req't Socialist Ice Cream Social";
  }

  render() {    
    return (
      <div className={cx('skill-detail')}>
        
        <div className={cx('skill-detail-header')}>
          <button className={cx('skill-detail-back-btn')} onClick={this.backAction}>{"< Back"}</button>
          <div className={cx('skill-detail-title')}>{skill_detail['title']}</div>
        </div>

        <div className={cx('sec-img')}>
          <img className={cx('detail-img-main')} src={img_1} />
          <div className={cx('sec-sub-img')}>
            <img className={cx('detail-img-sub')} src={img_2} />
            <img className={cx('detail-img-sub')} src={img_3} />
            <img className={cx('detail-img-sub')} src={img_4} />
            <img className={cx('detail-img-sub')} src={img_5} />
          </div>
        </div>

        <div className={cx('sec-info')}>
          <div className={cx('sec-info-para-1')}>
            <div className={cx('sec-info-host')}>
              <div>HOST</div>
              <div>{skill_detail['host']}</div>
            </div>

            <div className={cx('sec-info-neighborhood')}>
              <div>NEIGHBORHOOD</div>
              <div>{skill_detail['neighborhood']}</div>
            </div>
          </div>

          <div className={cx('sec-info-skillitname')}>
            <div>SKILLIT NAME</div>
            { skill_detail['skillit_name'].map((name, idx) => <div key={`skillit_name_${idx}`}>{name}</div>) }
          </div>

          <div className={cx('sec-info-text')}>
            <div>COST:</div>
            <div>{`$${skill_detail['cost']}`}</div>
          </div>

          <div className={cx('sec-info-text')}>
            <div>DURATION:</div>
            <div>{`${skill_detail['duration']}hrs`}</div>
          </div>

          <div className={cx('sec-info-text')}>
            <div>OCCUPANCY:</div>
            <div>{skill_detail['occupancy']}</div>
          </div>

          <div className={cx('sec-info-text')}>
            <div>TIMES:</div>
            <div>{skill_detail['times']}</div>
          </div>

          <div className={cx('sec-info-btn')}>
            <button className={cx('btn-email')} onClick={this.openEmailEditor}>EMAIL AARON</button>
          </div>
        </div>

        <div className={cx('sec-description')}>
          <div>FULL DESCRIPTION</div>
          { skill_detail['description'].map((item, idx) => {
            return (
              <div key={`desc-${idx}`} className={cx('detail-description')}>{item}</div>
            )
          })}
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
