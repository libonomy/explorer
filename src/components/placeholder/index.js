import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from 'src/vars/colors';

const Wrapper = styled.div`
  ${({ loading }) =>
    loading &&
    `
  position:relative;
   &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    background: rgba(255,255,255,.8);
    width: 100%;
    height: 100%;
    border-radius: .28571429rem;
    z-index: 100;
    }
  &:after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    margin: -1.3em 0 0 -1.3em;
    width: 2.5em;
    height: 2.5em;
    -webkit-animation: segment-spin .6s linear;
    animation: segment-spin .6s linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    border-radius: 500rem;
    border-color: ${colors.primary} rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.1);
    border-style: solid;
    border-width: .2em;
    -webkit-box-shadow: 0 0 0 1px transparent;
    box-shadow: 0 0 0 1px transparent;
    visibility: visible;
    z-index: 101;
    }
  `};
  @-webkit-keyframes segment-spin {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes segment-spin {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  } ;
`;

// const NoData = styled.div``;

const PlaceHolder = ({ loading, data, children }) => {
  return <Wrapper loading={true}>{children}</Wrapper>;
};

PlaceHolder.propTypes = {
  loading: PropTypes.bool
};

PlaceHolder.defaultProps = {
  loading: false
};
export default PlaceHolder;
