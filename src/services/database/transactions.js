import db from './sqlite';

export const createTransactionModel = props => {
  const { value, date = new Date(), note, accountId, categoryId } = props;

  return { value: Number(value), accountId, categoryId, date, note };
};

export const createTransactionsTable = () =>
  new Promise(resolve => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS transactions(' +
        'id INTEGER,' +
        'value	REAL,' +
        'date DATETIME,' +
        'note TEXT,' +
        'accountId INTEGER,' +
        'categoryId INTEGER,' +
        'FOREIGN KEY (accountId) REFERENCES accounts(id) ON DELETE CASCADE,' +
        'FOREIGN KEY (categoryId) REFERENCES categories(id) ON DELETE CASCADE,' +
        'PRIMARY KEY(id)' +
        ');',
        [],
        () => resolve()
      )
    })
  });

export const fetchTransactions = () =>
  new Promise(resolve => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM transactions ORDER BY date ASC;', [], (tx, results) => {
        const transactions = [];
        for (let i = 0; i < results.rows.length; i++) {
          transactions.push(results.rows.item(i))
        }

        resolve(transactions);
      });
    });
  });

export const createTransaction = transactionData => {
  const newTransaction = createTransactionModel(transactionData);

  return new Promise(resolve => {
    db.transaction(tx =>
      tx.executeSql(
        'INSERT INTO transactions(value,date,note,accountId,categoryId) VALUES ($0,$1,$2,$3,$4);',
        [
          newTransaction.value,
          newTransaction.date,
          newTransaction.note,
          newTransaction.accountId,
          newTransaction.categoryId
        ],
        (tx, results) => resolve(results.rows.insertId)
      )
    );
  });
};

export const deleteTransaction = id =>
  new Promise(resolve => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM transactions WHERE id=$0;',
        [ id ],
        () => resolve(id)
      );
    })
  });

export const editTransaction= (id, transactionData) => {
  const transaction = createTransactionModel(transactionData);

  return new Promise(resolve => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE transactions SET value=$0, note=$1, date=$2 WHERE id=$3;',
        [ transaction.value, transaction.note, transaction.date, id ],
        () => resolve(id)
      );
    })
  });
};

export const resetTransactions = () =>
  new Promise(resolve => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM transactions;',
        [],
        () => resolve()
      );
    })
  });
