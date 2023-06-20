import { Container } from "./style";

export function Text({ title, ...rest }) {
  return <Container {...rest}>{title}</Container>;
}
