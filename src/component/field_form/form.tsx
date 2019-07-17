import React from 'react';
import Card from '../card_symb/card';
import styled from 'styled-components';

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

const Field = styled.div`
    display: flex;
    font-family: ArialMT;
    font-size: 15px;
    line-height:32px;
    text-align: center;
`;
const ErrorMessage = styled.div`
    font-size: 13px;
    color: #FF1100;
    line-height:20px;
`;

function Detect(element: string) {
    if(element==="*") return <Card work={false} value={'●'}/>
    if(element==="I") return <Card work={true} value={'_'}/>
    if(element.match(/[\d X]/)) return <Card work={false} value={element}/>
     else return <span>{element}</span>

}

class Form extends React.Component<Props>{
    constructor(props: Props){
        super(props);
    }
    render() {
        return (
            <>
                <Field>
                    {this.props.mask.split("").map((element) => 
                    Detect(element)
                    )}
                </Field>
                <Field>
                    <ErrorMessage> 
                       Неверный номер, попробуйте еще раз
                    </ErrorMessage>
                </Field>
            </>
        );
    }
};

export default Form;