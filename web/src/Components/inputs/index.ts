import styled from "styled-components";

type StyledProps = {
  size?: string;
  justifySelf?: string;
  margin?: number;
  marginLeft?: string;
  contactType?: string;
  border?: boolean;
};

export const SeeAllButton = styled.a`
  font-family: "Raleway", sans-serif;

  font-weight: 700;
  font-size: 16;

  color: #2a7ae4;

  &::after {
    content: url("/Seta.png");

    margin-left: 10px;
    align-content: center;
  }
`;

export const OutlinedButton = styled.button`
  width: ${(props: StyledProps) =>
    props.size == "large"
      ? "289px"
      : props.size == "medium"
      ? "150px"
      : props.size == "full"
      ? "100%"
      : props.size == "small"
      ? "119px"
      : ""};

  height: ${(props: StyledProps) =>
    props.size == "large"
      ? "40px"
      : props.size == "medium"
      ? "40px"
      : props.size == "full"
      ? "40px"
      : props.size == "small"
      ? "29px"
      : ""};

  background-color: transparent;
  outline: none;
  border: solid 1px #2a7ae4;

  color: #2a7ae4;

  font-size: ${(props: StyledProps) =>
    props.size == "large" ? "17px" : props.size == "small" ? "12px" : "15px"};
  font-family: "Raleway", sans-serif;

  cursor: pointer;

  margin: ${(props: StyledProps) => props.margin || 0};

  position: relative;

  overflow: hidden;
  font-weight: bold;

  &:after {
    background-color: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.3;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: 1;
  }

  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  &:active {
    transform: scale(0.98);
    transition: linear 0.2s;
  }

  margin-left: ${(props: StyledProps) => props.marginLeft || 0};
`;

export const UserIconDiv = styled.div`
  cursor: pointer;

  margin-left: auto;
`;

export const BlueButton = styled.button`
  width: ${(props: StyledProps) =>
    props.size == "large"
      ? "289px"
      : props.size == "medium"
      ? "150px"
      : props.size == "full"
      ? "100%"
      : props.size == "small"
      ? "119px"
      : ""};

  height: ${(props: StyledProps) =>
    props.size == "large"
      ? "40px"
      : props.size == "medium"
      ? "40px"
      : props.size == "full"
      ? "40px"
      : props.size == "small"
      ? "29px"
      : ""};

  background-color: #2a7ae4;

  border: none;
  outline: none;

  color: #fff;

  font-size: ${(props: StyledProps) =>
    props.size == "large" ? "17px" : props.size == "small" ? "12px" : "15px"};
  font-family: "Raleway", sans-serif;

  cursor: pointer;

  margin: ${(props: StyledProps) => props.margin || 0};

  position: relative;

  overflow: hidden;

  &:after {
    background-color: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.3;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: 1;
  }

  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  &:active {
    transform: scale(0.98);
    transition: linear 0.2s;
  }

  margin-left: ${(props: StyledProps) => props.marginLeft || 0};
`;

export const SeachInput = styled.input`
  width: 30%;
  height: 40px;

  background: url("/SearchIcon.png") 95% center/17px 17px no-repeat;
  background-color: #f5f5f5;

  border: none;

  outline: none;

  border-radius: 25px;

  padding: 0 25px;

  font-family: "Raleway", sans-serif;

  color: #a2a2a2;

  &::placeholder {
    font-family: "Raleway", sans-serif;

    color: #a2a2a2;
  }
`;

export const ContactInputs = styled.input`
  height: ${(props: StyledProps) =>
    props.contactType == "message" ? "80px" : "50px"};

  outline: none;

  padding: 0 25px;

  font-family: "Raleway", sans-serif;
  font-size: 16px;

  color: #a2a2a2;

  &::placeholder {
    font-family: "Raleway", sans-serif;
    font-size: 16px;

    color: #a2a2a2;

    vertical-align: top;
  }

  border: ${(props: StyledProps) =>
    props.border ? "1px solid #A2A2A2" : "none"};
`;
