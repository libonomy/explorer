// import React from 'react';
// import styled from 'styled-components';
// import {
//   personIcon,
//   heartIcon,
//   facebookcolorIcon,
//   twittercolorIcon,
//   googleIcon,
//   discussionIcon,
//   mailIcon
// } from 'src/assets/images';
// import { Form, FormGroup, Input, Button } from 'reactstrap';

// const Wrapper = styled.div``;
// const Main = styled.div`
//   padding: 1rem 2rem;
// `;
// const Text = styled.p`
//   font-family: PoppinsRegular;
//   font-size: 15px;
//   font-weight: normal;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.33;
//   letter-spacing: 0.45px;
//   text-align: left;
//   color: #000000;
//   margin-bottom: 1.5rem;
// `;
// const HeartIcon = styled.img`
//   width: 12.6px;
//   height: 10.9px;
//   margin-right: 6px;
// `;
// const Number = styled.span`

//   font-family: Poppins;
//   font-size: 8px;
//   font-weight: normal;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 0.88;
//   letter-spacing: 0.24px;
//   text-align: left;
//   color: #ffffff;
//   border-radius: 1px;
//   background-color: #40b1be;
//   padding: 3px 5px 2px 5px;
//   margin: -6px 6px;

// }
// `;
// const Heading = styled.h6`
//   font-family: PoppinsRegular;
//   font-size: 12px;

//   text-align: left;
//   color: rgba(0, 0, 0, 0.5);
// `;
// const InputText = styled.div`
//   display: flex;
//   padding-top: 1rem;
//   @media (max-width: 576px) {
//     width: 100%;
//     flex-wrap: wrap;
//   }
// `;
// const PersonIcon = styled.img`
//   width: 52px;
//   height: 49px;
//   object-fit: contain;
//   margin-right: 1rem;
// `;
// const MessageBox = styled.textarea`
//   width: 820px;
//   height: 93px;
//   object-fit: contain;
//   border-radius: 8px;
//   background-color: #ffffff;
//   border: 1px solid #fff;
//   box-shadow: 0 0 6px 0 rgba(18, 38, 63, 0.16);
//   outline: none;
//   padding: 1rem;
//   opacity: 1;
// `;
// const Icon = styled.img`
//   width: 22px;
//   height: 22px;
//   object-fit: contain;
//   margin-right: 4px;
//   margin-top: -4px;
// `;
// const SocialIcon = styled.div`
//   display: flex;
// `;
// const InputField = styled(Input)`
//   outline: none;
//   margin-bottom: 1rem;
//   width: 343px;
//   height: 41px;
//   color: #495057;
//   border-color: #f3f3f3;
//   border-radius: 6px;
//   box-shadow: none;
//   background-color: #ffffff;
//   &:focus {
//     color: #495057;
//     border-color: #f3f3f3;
//     border-radius: 6px;
//     box-shadow: none;
//     background-color: #ffffff;
//   }
//   @media (max-width: 768px) {
//     width: 80%;
//   }
//   @media (max-width: 576px) {
//     width: 80%;
//   }
// `;
// const Header = styled.h3`
//   font-family: PoppinsBold;
//   font-size: 12px;
//   font-weight: 500;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 2.33;
//   letter-spacing: 0.36px;
//   text-align: left;
//   color: #000000;
//   margin-bottom: 1rem;
// `;
// const SocialButton = styled.div`
//   margin-right: 3rem;
//   @media (max-width: 576px) {
//     width: 100%;
//   }
// `;
// const InputForm = styled.div``;
// const Content = styled.p`
//   font-family: PoppinsRegular;
//   font-size: 12px;
//   font-weight: normal;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.67;
//   letter-spacing: 0.36px;
//   text-align: left;
//   color: #000000;
//   max-width: 85%;
//   margin-bottom: 10px;
// `;
// const SubscribeText = styled.p`
//   font-family: PoppinsRegular;
//   font-size: 10px;
//   font-weight: 500;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 2.6;
//   letter-spacing: 0.3px;
//   text-align: left;
//   color: #000000;
//   padding: 1rem;
//   margin-top: 3rem;
//   border-top: 1px solid #f1f1f1;
//   padding-bottom: 0rem;
// `;
// const MailIcon = styled.img`
//   width: 16.7px;
//   height: 11.1px;
//   object-fit: contain;
//   margin-right: 4px;
// `;
// const SignUpButton = styled(Button)`
//   width: auto;
//   height: 28px;
//   border-radius: 3px;
//   box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
//   background-color: #40b1be;
//   align-items: center;
//   display: flex;
//   font-family: PoppinsRegular;
//   font-size: 12px;
//   border-color: #40b1be;
//   &:hover {
//     color: #fff;
//     background-color: #40b1be;
//     border-color: #40b1be;
//   }

//   &:focus,
//   .btn-secondary.focus {
//     color: #fff;
//     background-color: #40b1be;
//     border-color: #40b1be;
//     box-shadow: none;
//     outline: none;
//   }
//   &:not(:disabled):not(.disabled):active,
//   &:not(:disabled):not(.disabled).active,
//   .show > .btn-secondary.dropdown-toggle {
//     color: #fff;
//     background-color: #40b1be !important;
//     border-color: #40b1b3 !important;
//   }
// `;

// const Comments = () => {
//   return (
//     <Wrapper>
//       <Main>
//         <Text>
//           Make sure to use the "Vote Down" button for any spammy posts, and the
//           "Vote Up" for interesting conversations.
//         </Text>
//         <Heading>
//           <HeartIcon src={heartIcon} alt="heart" />
//           Recommend
//           <Number>2</Number>
//         </Heading>
//         <InputText>
//           <PersonIcon src={personIcon} alt="person" />
//           <MessageBox
//             type="textarea"
//             name="text"
//             placeholder="Start Discussion..."
//           />
//         </InputText>
//         <InputText>
//           <InputText>
//             <SocialButton>
//               <Header>LOG IN WITH</Header>
//               <SocialIcon>
//                 <Icon src={twittercolorIcon} alt="twitter" />
//                 <Icon src={facebookcolorIcon} alt="facebook" />
//                 <Icon src={googleIcon} alt="google" />
//                 <Icon src={discussionIcon} alt="discussion" />
//               </SocialIcon>
//             </SocialButton>
//             <InputForm>
//               <Header>OR SIGN UP WITH DISQUS</Header>
//               <Form>
//                 <FormGroup>
//                   <InputField
//                     type="name"
//                     name="name"
//                     id="exampleEmail"
//                     placeholder="Name"
//                   />
//                   <InputField
//                     type="email"
//                     name="email"
//                     id="exampleEmail"
//                     placeholder="Email"
//                   />

//                   <InputField
//                     type="password"
//                     name="password"
//                     id="examplePassword"
//                     placeholder="Password"
//                   />
//                 </FormGroup>
//                 <Content>
//                   Please access our Privacy Policy to learn what personal data
//                   Disqus collects and your choices about how it is used. All
//                   users of our service are also subject to our Terms of Service.
//                 </Content>
//                 <SignUpButton>Signup</SignUpButton>
//               </Form>
//             </InputForm>
//           </InputText>
//         </InputText>
//       </Main>
//       <SubscribeText>
//         <MailIcon src={mailIcon} alt="mail" />
//         Subscribe to get the mail for this discussion
//       </SubscribeText>
//     </Wrapper>
//   );
// };

// export default Comments;
