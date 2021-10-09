
import { useSelector } from "react-redux";
import { Container,  Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const CartComponent = () => {
  const data = useSelector((state) => state.product.cart);
  console.log('data: ', data);
  return (
    <Container>
      <Table sx={{minWidTableCell: 650}}>
      <TableHead>
        <TableRow>
            <TableCell>Sno.</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Desc</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.qty}</TableCell>
              <TableCell>{item.desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default CartComponent;
