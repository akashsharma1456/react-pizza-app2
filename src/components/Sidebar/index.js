import { observer } from 'mobx-react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarRoute,
  SideBtnWrap,
  Total,
  OrderList
} from './SidebarElements';
import { products_data } from '../Products/data';
//import { Alert } from 'react-alert'


const myFunction = () => {
  window.alert("Your Order Will Be Ready In 20 Minutes!")
}

const Sidebar = observer(({ isOpen, toggle }) => {  

  const total_per_row = products_data.productData
  .flatMap(el => el.details)
  .map(el => el.price * el.quantity)
  
  const subtotal = total_per_row.reduce((a,b)=>a+b,0)

  const tax = Math.round((subtotal * 0.09975 + Number.EPSILON) * 100) / 100;

  const total = (subtotal + tax).toFixed(2);
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <center style={{ marginTop: "20px" }}>Your Order</center>
      <SidebarMenu>
        <div>
          {products_data.productData.map((value, i) => {
            return(
            <div key={i}>
              {value.details
                .filter((value) => value.quantity > 0)
                .map((value, index) => (
                  <OrderList key={index}>
                    <span>{value.name}</span>
                    <span>x{value.quantity}</span>
                    <span>${(value.price * value.quantity).toFixed(2)}</span>
                  </OrderList>
                ))}
            </div>
          )})}
        </div>
      </SidebarMenu>
      <Total>
        <div>Sub Total</div>
        <div>${subtotal}</div>
        <div>Tax</div>
        <div>
          $
          {tax}
        </div>
        <div>Total</div>
        <div>
          $
          {total}
        </div>
      </Total>
      <SideBtnWrap>
        <SidebarRoute onClick={myFunction}>Checkout</SidebarRoute>
        
      </SideBtnWrap>
    </SidebarContainer>
  );
});

export default Sidebar;
