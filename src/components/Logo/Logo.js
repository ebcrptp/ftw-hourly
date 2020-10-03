import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import config from '../../config';
import IconLogo from './IconLogo';
import LogoImage from './logo-desktop.png';
import css from './Logo.css';

const Logo = props => {
  const { className, format, ...rest } = props;
  const mobileClasses = classNames(css.logoMobile, className);

if (format === 'desktop') {
  // If you want to use image instead of svg as a logo you can use the following code.
  // Also, remember to import the image as LogoImage here.
  return <img className={className} src={LogoImage} alt={config.siteTitle} {...rest} />
}

return <IconLogo className={mobileClasses} {...rest} />;
};

/*
  return (
    <IconLogo
      className={format === 'desktop' ? className : mobileClasses}
      format={format}
      {...rest}
    />
  );
};
*/
const { oneOf, string } = PropTypes;

Logo.defaultProps = {
  className: null,
  format: 'desktop',
};

Logo.propTypes = {
  className: string,
  format: oneOf(['desktop', 'mobile']),
};

export default Logo;
