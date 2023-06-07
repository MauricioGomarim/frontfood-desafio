import { Container } from "./style";

export function ButtonText({ icon: Icon, title, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      {title}
    </Container>
  );
}
