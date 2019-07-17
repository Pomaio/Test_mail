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

    margin-left: 2px;
    margin-right: 2px;

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