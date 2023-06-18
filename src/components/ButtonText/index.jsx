import { Container } from "./style";

export function ButtonText({ icon: Icon, title, ...rest }) {
  return (
    <Container type="button" {...rest}>
      <a>
        {Icon && <Icon />}
        {title}
      </a>
    </Container>
  );
}
