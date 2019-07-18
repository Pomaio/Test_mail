import React from 'react';
import {Box,BoxI} from './card.styled';

interface Props {
    work: boolean;
    value: string;
    position: number;
    updateData?: (input: string, position:number) => void;
};
interface State {
    input: string;
};

class Card extends React.Component<Props, State>{
    state = {input: ''}
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
                className={(!this.state.input.match(/\d/)&& this.state.input!=='') ? 'danger':''}
                maxLength={1}
                onChange={this.handleChange}
                value={this.state.input} 
                placeholder={this.props.value}
            ></BoxI>;
        }
        return (
            <Box> 
                {this.props.value} 
            </Box>);
    }
    handleChange = ({ target }: any) => {
        this.setState({ input: target.value });
        this.props.updateData && this.props.updateData(target.value, this.props.position);
    };
};

export default Card;