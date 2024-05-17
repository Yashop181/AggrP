import React from 'react';

function Summary({ summary }) {
    // Internal CSS styles
    const styles = {
        container: {
            display: 'table',
            width: '100%',
            backgroundColor: '#f4f4f4',
            padding: '20px',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
        },
        row: {
            display: 'table-row',
        },
        cell: {
            display: 'table-cell',
            padding: '8px',
            borderBottom: '1px solid #ddd',
        },
        header: {
            fontWeight: 'bold',
        }
    };

    // Return JSX to render summary information
    return (
        <div style={styles.container}>
            <div style={{ ...styles.row, ...styles.header }}>
                <div style={styles.cell}>Summary</div>
                <div style={styles.cell}></div>
            </div>
            <div style={styles.row}>
                <div style={styles.cell}>Total Amount:</div>
                <div style={styles.cell}>${summary.totalAmount}</div>
            </div>
            <div style={styles.row}>
                <div style={styles.cell}>Number of Transactions:</div>
                <div style={styles.cell}>{summary.transactionCount}</div>
            </div>
        </div>
    );
}

// Export Summary component as the default export
export default Summary;
