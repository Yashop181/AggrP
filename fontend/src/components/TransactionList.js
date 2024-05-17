import React from 'react';

function TransactionList({ transactions }) {
    // Internal CSS styles
    const styles = {
        container: {
            display: 'table',
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px',
        },
        header: {
            display: 'table-row',
            backgroundColor: '#f2f2f2',
            fontWeight: 'bold',
        },
        row: {
            display: 'table-row',
        },
        cell: {
            display: 'table-cell',
            padding: '8px',
            border: '1px solid #ddd',
            textAlign: 'left',
        },
    };

    // Return JSX to render the list of transactions
    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <div style={styles.cell}>Description</div>
                <div style={styles.cell}>Amount</div>
            </div>
            {/* Map through each transaction and render a table row for each */}
            {transactions.map(transaction => (
                <div key={transaction._id} style={styles.row}>
                    {/* Display transaction description and amount */}
                    <div style={styles.cell}>{transaction.description}</div>
                    <div style={styles.cell}>${transaction.amount}</div>
                </div>
            ))}
        </div>
    );
}

// Export TransactionList component as the default export
export default TransactionList;
