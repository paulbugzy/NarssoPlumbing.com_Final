import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, onClick, className, disabled, active, ...attrs }) => {
    const onClickAction = e => {
        if (disabled) {
            e.preventDefault();
        } else {
            return onClick(e);
        }
    };
    const classes = classNames(
        'btn',
        className,
        { active },
    );
    const Tag = attrs.href ? 'a' : 'button';
    return (
        <Tag
            className={classes || ''}
            disabled={disabled || false}
            onClick={onClickAction}
            {...attrs}
        >
            <span>{children}</span>
        </Tag>
    );
};
Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
};
export default Button;