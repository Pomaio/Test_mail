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
    background: #F0F0F0;
    border-radius: 2px;

    line-height:32px;
    text-align: center;
    margin-left: 8px;
    
`;



class Card extends React.Component<Props>{
    constructor(props: Props){
        super(props);
    }
    render() {
        return (
            <Box> {this.props.value}</Box>
        );
    }
};

export default Card;