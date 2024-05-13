import css from "./Transaction.module.css"; 

const TransactionHistory = ({ items }) => {
  return (
    <table className={css["transaction-table"]}>
      <thead>
        <tr className={css["transactions-title"]}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

// const TransactionHistory = ({ items }) => {
//   return (
//     <table className="transaction-table">
//       <thead>
//         <tr className="transactions-title">
//           <th>Type</th>
//           <th>Amount</th>
//           <th>Currency</th>
//         </tr>
//       </thead>

//       <tbody>
//         {items.map((transaction) => (
//           <tr key={transaction.id}>
//             <td>{transaction.type}</td>
//             <td>{transaction.amount}</td>
//             <td>{transaction.currency}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default TransactionHistory;
