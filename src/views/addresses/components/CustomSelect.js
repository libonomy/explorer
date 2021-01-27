import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  width: 175px;
  @media (max-width: 576px) {
    width: 150px;
  }
`;
const SelectExp = styled.div`
  height: 30px;
  border: 1px solid #aaa;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const SelectItem = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  padding: 4px 12px;
  vertical-align: middle;
  font-size: 14px;
  font-family: 'POPPINSREGULAR';
  line-height: 22px;
  text-align: left;
  cursor: pointer;
`;
const SelectBoxItem = styled.div``;
const Arrow = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  margin-top: -18px;
  margin-right: 8px;

  .select-box--arrow-down {
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid black;
  }

  .select-box--arrow-up {
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 8px solid Black;
  }
`;
const WrapExp = styled.div`
  background-color: #fff;
  padding: 4px 12px;
  cursor: pointer;
  font-size: 14px;
  font-family: 'POPPINSREGULAR';
  line-height: 22px;
  text-align: left;
  &:hover {
    background-color: aliceblue;
  }
  :first-child {
    margin-top: 12px;
  }
`;
class SelectBox extends React.Component {
  state = {
    items: this.props.items || [],
    showItems: false,
    selectedItem: this.props.items && this.props.items[0]
  };

  dropDown = () => {
    this.setState((prevState) => ({
      showItems: !prevState.showItems
    }));
  };

  selectItem = (item) => {
    this.setState({
      selectedItem: item,
      showItems: false
    });
  };

  render() {
    return (
      <Wrapper className="select-box--box">
        <SelectExp className="select-box--container">
          <SelectItem
            className="select-box--selected-item"
            onClick={this.dropDown}>
            {this.state.selectedItem.value}
          </SelectItem>
          <Arrow className="select-box--arrow" onClick={this.dropDown}>
            <span
              className={`${
                this.state.showItems
                  ? 'select-box--arrow-up'
                  : 'select-box--arrow-down'
              }`}
            />
          </Arrow>

          <SelectBoxItem
            style={{ display: this.state.showItems ? 'block' : 'none' }}
            className={'select-box--items'}>
            {this.state.items.map((item) => (
              <WrapExp
                key={item.id}
                onClick={() => this.selectItem(item)}
                className={this.state.selectedItem === item ? 'selected' : ''}>
                {item.value}
              </WrapExp>
            ))}
          </SelectBoxItem>
        </SelectExp>
      </Wrapper>
    );
  }
}

export default SelectBox;
