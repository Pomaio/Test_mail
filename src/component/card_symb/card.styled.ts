import styled from 'styled-components';


const box_props = `
    display: block;
    width: 25px;
    height: 32px;
    border-radius: 2px;
    margin-left: 2px;
    margin-right: 2px;
`;

const border_input_props = `    
    text-align: center;
    font-family: ArialMT;
    font-size: 15px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    padding: 0;
    background: #FFFFFF;
    outline:none;
`;

export const Box = styled.span`
   
    ${box_props}

    background: #F0F0F0;
`;
export const BoxI = styled.input`

    ${box_props}
    ${border_input_props}
    &.danger{
        border-color: red;
    } 
    &:hover{ 
        border: 1px solid rgba(0, 0, 0, 0.24);
    }
    &:focus{
        border: 1px solid rgba(0, 0, 0, 0.48);
    }
`;
