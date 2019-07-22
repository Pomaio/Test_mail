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
    state = {input: [''], condition: true}
    render() {
        return (
            <>
                <Field>
                    {this.props.mask.split("").map((element,index) => this.detect(element,index))}
                </Field>
                {!this.state.condition && <Field>
                    <ErrorMessage> 
                       Неверный номер, попробуйте еще раз
                    </ErrorMessage>
                </Field>}
            </>
        );
    }
    detect = (element: string, index:number) => {
        if(element==="*") return <Card position={index} work={false} value={'●'}/>
        if(element==="I") {
            return <Card position={index}
                work={true} updateData={this.updateData} value={'_'}/>
    }
        if(element.match(/[\d X]/)) return <Card position={index} work={false} value={element}/>
         else return <span>{element}</span>
    };
    updateData = (input:string, position: number) => {
        if(input.match(/\d/)||input===''){
            this.setState({condition: true});
            this.state.input[position] = input;
        }
        else{
            this.setState({condition: false});
            this.state.input[position] = '';
        }
    }
};

export default Form;