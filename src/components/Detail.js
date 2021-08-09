// import React, { useContext } from 'react';
// import Typography from '@material-ui/core/Typography';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import Avatar from '@material-ui/core/Avatar';
// import { makeStyles } from '@material-ui/core';
// import { appConfig } from '../services/config';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
//   total: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     marginTop: 10,
//     marginBottom: 20,
//   },
// });

// const CartDetail = () => {
//   const classes = useStyles();
//   return (
//     <>
//       <TableContainer component={Paper}>
//         <Table className={classes.table} aria-label='simple table'>
//           <TableHead>
//             <TableRow>
//               <TableCell></TableCell>
//               <TableCell>Item</TableCell>
//               <TableCell>Price</TableCell>
//               <TableCell>Qty</TableCell>
//               <TableCell>Total</TableCell>
//               <TableCell></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {items.map(item => (
//               <TableRow key={item.id}>
//                 <TableCell>
//                   <Avatar
//                     alt={item.name}
//                     src={`${appConfig.apiURL}${item.photo.url}`}
//                     variant='square'
//                   />
//                 </TableCell>
//                 <TableCell>{item.name}</TableCell>
//                 <TableCell>{item.price.toFixed(2)}</TableCell>
//                 <TableCell>{item.qty}</TableCell>
//                 <TableCell>{(item.price * item.qty).toFixed(2)}</TableCell>
//                 <TableCell>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <div className={classes.total}>
//         <Typography variant='h5'>${cart.cartTotal.toFixed(2)}</Typography>
//       </div>
//     </>
//   );
// };

// export default CartDetail;
