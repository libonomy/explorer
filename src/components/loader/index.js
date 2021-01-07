// import React from 'react';
// import { Spinner } from 'reactstrap';
// import styled from 'styled-components';

// const Loader = styled(Spinner)`
//   position: absolute;
//   left: calc(50% - 23px);
// `;

// export default Loader;

import React from 'react';
import PropTypes from 'prop-types';

export default (WrappedComponent) => {
  const hocComponent = ({ lodaing, ...props }) => {
    return <WrappedComponent {...props} />;
  };

  hocComponent.propTypes = {};

  return hocComponent;
};
