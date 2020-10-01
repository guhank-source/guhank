import React from 'react';
import PropTypes from 'prop-types';
const Guhan = ({ icon, title }) => {
  return (
    <div>
      <nav className='navbar bg-primary'>
        <h1>
          <i className={icon} />
          {title}
        </h1>
      </nav>
    </div>
  );
};

Guhan.defaultProps = {
  title: 'Smart Search Buddy',
  icon: 'fab fa-github',
};
Guhan.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Guhan;
