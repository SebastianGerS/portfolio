import React from 'react';
import PropTypes from 'prop-types';

const PageHeading = (props) => {
  const { name } = props;

  return (
    <h2 className="page-heading">
      {name.toUpperCase()}
    </h2>
  );
};

PageHeading.propTypes = {
  name: PropTypes.string.isRequired,
};
export default PageHeading;
