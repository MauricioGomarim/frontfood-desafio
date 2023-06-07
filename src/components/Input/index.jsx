import {Container} from './style'

export function Input({label, ...rest}){
    return(
        <Container>
            <label>{label}</label>
            <input {...rest}/>
        </Container>
    )
}