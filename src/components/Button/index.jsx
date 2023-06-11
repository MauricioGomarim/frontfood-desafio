import {Container} from "./style"

export function Button({Icon: icon, title, ...rest}){
    return(
        <Container {...rest}>           
            {title}
        </Container>
    )
}