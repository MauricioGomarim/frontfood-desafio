import { Container } from "./style";
import { useAuth } from "../../hook/auth";

export function PedidoCard({ data, ...rest }) {
  const { user } = useAuth();
  function formatDate(date) {
    const dateFormatted = new Date(date);

    let monthFormatted = (dateFormatted.getMonth() + 1).toString();
    monthFormatted =
      monthFormatted.length == 1 ? `0${monthFormatted}` : monthFormatted;

    let minutesFormatted = dateFormatted.getMinutes().toString();
    minutesFormatted =
      minutesFormatted.length == 1 ? `0${minutesFormatted}` : minutesFormatted;

    return `${dateFormatted.getDate()}/${monthFormatted} às ${
      dateFormatted.getHours() - 3
    }h${minutesFormatted}`;
  }
  return (
    <Container {...rest}>
      {user.isAdmin ? (
        <div className="Contet-card">
          <div className="text-hora">
            <p>0000{data.id}</p>
            <p>{formatDate(data.created_at)}</p>
          </div>
          <div className="items">
            {data &&
              data.items.map((item, index) => (
                <>
                  <span key={item}>
                    {item.title} x {item.quantity} ,{" "}
                  </span>
                </>
              ))}
          </div>
          <select
            defaultValue={data.orderStatus}
            onChange={(event) => handleOrderStatus(data, event)}
          >
            <option value="🟡 Pendente">🟡 Pendente</option>
            <option value="🟠 Preparando">🟠 Preparando</option>
            <option value="🟢 Entregue">🟢 Entregue</option>
            <option value="🔴 Cancelado">🔴 Cancelado</option>
          </select>
        </div>
      ) : (
        <div className="Contet-card">
        <div className="text-hora">
          <p>0000{data.id}</p>
          <p>{data.orderStatus}</p>
          <p>{formatDate(data.created_at)}</p>

        </div>
        <div className="items">
          {data &&
            data.items.map((item, index) => (
              <>
                <span key={item}>
                  {item.title} x {item.quantity} ,{" "}
                </span>
              </>
            ))}
        </div>
        
      </div>
      )}
    </Container>
  );
}
