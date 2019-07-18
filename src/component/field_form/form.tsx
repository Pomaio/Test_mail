import React from 'react';
import Card from '../card_symb/card';
import {Field, ErrorMessage} from './form.styled';

interface Props {
    /**
	 * Маска инпута. Значения:
	 * "I" - одиночный инпут для ввода одной цифры
	 * "X" - серый блок с символом "X"
	 * "*" - серый блок с символом "●"
	 * <цифра> - серый блок с введенной цифрой
	 * <не цифра> - символ отображается "как есть"
	 */
    mask: string;
};


class Form extends React.Component<Props>{
    state = {input: '', condition: true}
    render() {
        return (
            <>
                <Field>
                    {this.props.mask.split("").map((element) => this.detect(element))}
                </Field>
                {!this.state.condition && <Field>
                    <ErrorMessage> 
                       Неверный номер, попробуйте еще раз
                    </ErrorMessage>
                </Field>}
            </>
        );
    }
    detect = (element: string) => {
        if(element==="*") return <Card work={false} value={'●'}/>
        if(element==="I") {
            return <Card 
                work={true} updateData={this.updateData} value={'_'}/>
    }
        if(element.match(/[\d X]/)) return <Card work={false} value={element}/>
         else return <span>{element}</span>
    };
    updateData = (input:string) => {
        const value = (this.state.condition) ? (this.state.input+input) : input;
        this.setState({condition: (!input.match(/\d/)) ? false : true});
        this.setState({ input: value});
    }
};

export default Form;