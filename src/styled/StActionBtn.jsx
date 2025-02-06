import styled from 'styled-components';

const ButtonStyle = `
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ActionBtn = styled.button`
    ${ButtonStyle}
    background: ${(props) => (props.$variant === 'delete' ? '#e57373' : '#556c75')};

    &:hover {
        background: ${(props) => (props.$variant === 'delete' ? '#d32f2f' : '#7a8b97')};
        transform: scale(1.05);
    }

    &:active {
        background: ${(props) => (props.$variant === 'delete' ? '#c62828' : '#4b5c61')};
        transform: scale(0.98);
    }
`;
