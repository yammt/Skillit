import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../css/components/skillit';

const cx = classNames.bind(styles);

const Skillit = ({skill, onSelect}) => {
    return (
        <div key={`skillitem_${skill['idx']}`}  className={cx('skill-item')}>
            <div className={cx('skill-item-text')}>
                <div className={cx('skill-item-title')}>{skill['title']}</div>
                <div className={cx('skill-item-content')}>{skill['content']}</div>
            </div>
            <div className={cx('skill-item-component')}>
                <img className={cx('skill-item-img')} src={skill['img']} />
                <button className={cx('skill-item-btn')} value={skill['id']} onClick={onSelect}>More Info</button>
            </div>
        </div>
    );
};

Skillit.propTypes = {
  skill: PropTypes.object,
  onSelect: PropTypes.func.isRequired
};

export default Skillit;
