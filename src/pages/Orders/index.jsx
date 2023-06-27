// const moment = require("moment-timezone");
// Styling Imports
import { Container, Content, Table, Card } from "./styles.js";
import { PedidoCard } from "../../components/PedidoCard";

// Components Imports
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

// Strategic imports (API and others)
import { api } from "../../services/api";
import { useAuth } from "../../hook/auth";
import { useEffect, useState } from "react";
import { useCart } from "../../hook/cart";

export function Orders() {
  const { user } = useAuth();
  const { orders, setOrders } = useCart();
  useEffect(() => {
    async function fetchOrders() {
      const response = await api.get("/orders");
      console.log(response.data, "request");
      setOrders(response.data);
    }

    fetchOrders();
  }, []);

  // Function for change the Order Status
  async function handleOrderStatus(order, event) {
    let statusSelected = event.target.value;

    const cart = {
      id: order.id,
      orderStatus: statusSelected,
    };

    await api.put("/orders", cart);
    location.reload();
  }

  // Function for formatting the Order Date
  function formatDate(date) {
    const dateFormatted = new Date(date);

    let monthFormatted = (dateFormatted.getMonth() + 1).toString();
    monthFormatted =
      monthFormatted.length == 1 ? `0${monthFormatted}` : monthFormatted;

    let minutesFormatted = dateFormatted.getMinutes().toString();
    minutesFormatted =
      minutesFormatted.length == 1 ? `0${minutesFormatted}` : minutesFormatted;

    return `${dateFormatted.getDate()}/${monthFormatted} às ${dateFormatted.getHours()}h${minutesFormatted}`;
  }

  return (
    <Container>
      <Header />
      <Content>
        <h1>Pedidos</h1>

        <Table>
          <table>
            <thead>
              <tr>
                <th>Status</th>
                <th>Código</th>
                <th>Detalhamento</th>
                <th>Data e hora</th>
              </tr>
            </thead>

            {orders.length < 1 && (
              <tbody>
                <tr>
                  <td colSpan="4">
                    <div className="zeroOrders">
                      <p>Não existem pedidos cadastrados ainda! =/</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            )}

            {user.isAdmin ? (
              <tbody className="order">
                {orders &&
                  orders.map((order) => (
                    <tr key={String(order.id)}>
                      <td>
                        <select
                          defaultValue={order.orderStatus}
                          onChange={(event) => handleOrderStatus(order, event)}
                        >
                          <option value="🟡 Pendente">🟡 Pendente</option>
                          <option value="🟠 Preparando">🟠 Preparando</option>
                          <option value="🟢 Entregue">🟢 Entregue</option>
                          <option value="🔴 Cancelado">🔴 Cancelado</option>
                        </select>
                      </td>
                      <td>0000{order.id}</td>
                      <td>
                        {order.items.map((item) => (
                          <span key={item.title}>
                            {item.quantity} x {item.title} ,{" "}
                          </span>
                        ))}
                      </td>
                      <td>{formatDate(order.created_at)}</td>
                    </tr>
                  ))}
              </tbody>
            ) : (
              <tbody className="order">
                {orders &&
                  orders.map((order) => (
                    <tr key={String(order.id)}>
                      <td>{order.orderStatus}</td>
                      <td>0000{order.id}</td>
                      <td>
                        {order.items.map((item) => (
                          <span key={item.title}>
                            {item.quantity} x {item.title} ,{" "}
                          </span>
                        ))}
                      </td>
                      <td>{formatDate(order.created_at)}</td>
                    </tr>
                  ))}
              </tbody>
            )}
          </table>
        </Table>

        <Card>
          {orders &&
            orders.map((order) => <PedidoCard data={order} key={order.id} />)}
        </Card>
      </Content>
      <Footer />
    </Container>
  );
}
