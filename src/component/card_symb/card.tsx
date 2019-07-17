import React from 'react';
import styled from 'styled-components';

interface Props {
    work: boolean;
    value: string;
};
const Box = styled.span`
    display: block;
    width: 25px;
    height: 32px;
    border-radius: 2px;

    margin-left: 2px;
    margin-right: 2px;
    background: #F0F0F0;
`;
const BoxI = styled.input`
    text-align: center;
    font-family: ArialMT;
    font-size: 15px;

    display: block;
    width: 25px;
    height: 32px;
    border-radius: 2px;

    border: 1px solid rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    padding: 0;
    background: #FFFFFF;
    outline:none;

    &:hover{ 
        border: 1px solid rgba(0, 0, 0, 0.24);
    }
    &:focus{
        border: 1px solid rgba(0, 0, 0, 0.48);
    }
`;



class Card extends React.Component<Props>{
    constructor(props: Props){
        super(props);
    }
    render() {
        return (
            <Box> 
                { 
                   this.Check(this.props)
                }
            </Box>
        );
    }
    Check(props: Props){
        if(props.work) {
            return <BoxI 
                placeholder={props.value}

                    ></BoxI>;
        }
         else return props.value
    }

};

export default Card;