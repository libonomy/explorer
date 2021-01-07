import React from 'react';
import styled from 'styled-components';
import {
  personIcon,
  heartIcon
  // facebookcolorIcon,
  // twittercolorIcon,
  // googleicon,
  // discussionIcon
} from 'src/assets/images';
const Wrapper = styled.div`
  padding: 0.75rem;
`;
const Text = styled.p`
  font-family: PoppinsRegular;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.45px;
  text-align: left;
  color: #000000;
`;
const HeartIcon = styled.img`
  width: 12.6px;
  height: 10.9px;
  margin-right: 6px;
`;
const Number = styled.span`
  
  font-family: Poppins;
  font-size: 8px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.88;
  letter-spacing: 0.24px;
  text-align: left;
  color: #ffffff;
  border-radius: 1px;
  background-color: #40b1be;
  padding: 3px 6px;
  margin: -6px 6px;

}
`;
const Heading = styled.h6`
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 0.36px;
  text-align: left;
  color: rgba(0, 0, 0, 0.5);
`;
const InputText = styled.div`
  display: flex;
`;
const PersonIcon = styled.div`
  display: flex;
`;
const MessageBox = styled.div`
  display: flex;
`;
const Comments = () => {
  return (
    <Wrapper>
      <Text>
        Make sure to use the "Vote Down" button for any spammy posts, and the
        "Vote Up" for interesting conversations.
      </Text>
      <Heading>
        <HeartIcon src={heartIcon} alt="logo" />
        Recommend
        <Number>2</Number>
      </Heading>
      <InputText>
        <PersonIcon src={personIcon} alt="logo" />
        <MessageBox type="textarea" name="text" id="exampleText" />
      </InputText>
    </Wrapper>
  );
};

export default Comments;
