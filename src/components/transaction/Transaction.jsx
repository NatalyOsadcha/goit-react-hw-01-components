import PropTypes from 'prop-types';
import css from './Transaction.module.css';
export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableTitle}>
        <tr>
          <th className={css.ceil}>Type</th>
          <th className={css.ceil}>Amount</th>
          <th className={css.ceil}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.tableRow}>
            <td className={css.ceil}>{type}</td>
            <td className={css.ceil}>{amount}</td>
            <td className={css.ceil}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
