import { Container } from "./style";

export function ButtonText({ icon: Icon, title, ...rest }) {
  return (
    <Container {...rest}>
      <a>
        {Icon && <Icon />}
        {title}
      </a>
    </Container>
  );
}
