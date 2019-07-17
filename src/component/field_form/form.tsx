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
    margin: 0px;
    font-family: ArialMT;
    font-size: 15px;
`;



class Form extends React.Component<Props>{
    // mask='+7(985)0II-**-**'/
    constructor(props: Props){
        super(props);
    }
    render() {
        return (
            <Field>
                {this.props.mask.split("").map((element) => 
                <Card work={false} value={element} />)}
            </Field>
        );
    }
};

export default Form;