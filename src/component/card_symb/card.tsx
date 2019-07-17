import React from 'react';
import {Box,BoxI} from './card.styled';

interface Props {
    work: boolean;
    value: string;
};
interface State {
    input: string;
};

class Card extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {input: ''}
    }


    render() {
        return (
            <>
                {this.check()}
            </>
        );
    }
    check() {
        if (this.props.work) {
            return <BoxI
                value={this.state.input} 
                placeholder={this.props.value}
            ></BoxI>;
        }
        else return <Box> {this.props.value} </Box>
    }
};

export default Card;