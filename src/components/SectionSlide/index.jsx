import { Container } from "./style"

export function SectionSlide({ children, ...rest}) {
    return(
        <Container {...rest}>
            {children}
        </Container>
    );
}