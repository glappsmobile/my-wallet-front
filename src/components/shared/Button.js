import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    min-height: 46px;
    border-radius: 5px;
    border: none;
    background-color: #ae28d6;
    color: white;
    font-weight: bold;
    font-size: 20px;
    font-family: "Raleway", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:disabled {
       opacity: 0.5;
    }
`;

export default Button;
