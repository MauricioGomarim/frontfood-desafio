import { Container } from "./style";

export function SectionLabel({ title, children, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{title}</h1>
      <div>{children}</div>
    </Container>
  );
}
