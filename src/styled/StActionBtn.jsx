import styled from 'styled-components';

export const ButtonStyle = `
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
    background: ${(props) => {
        if (props.$variant === 'delete') {
            return props.theme.deleteBtn; 
        }
        if (props.$variant === 'update') {
            return props.theme.updateBtn; 
        }
        return props.theme.addBtn;
    }};

    &:hover {
        background: ${(props) => {
            if (props.$variant === 'delete') {
                return props.theme.navBackground; 
            }
            if (props.$variant === 'update') {
                return props.theme.updateBtnHover; 
            }
            return props.theme.addBtnHover; 
        }};
        transform: scale(1.05);
    }

    &:active {
        background: ${(props) => {
            if (props.$variant === 'delete') {
                return props.theme.deleteBtnActive; 
            }
            if (props.$variant === 'update') {
                return props.theme.updateBtnActive; 
            }
            return props.theme.addBtnActive; 
        }};
        transform: scale(0.98);
    }
`;
