import db from './sqlite';

export const createTransferModel = props => {
  const { value, fromAccountId, toAccountId, exchangeRate, date = new Date(), note } = props;

  return { value, fromAccountId, toAccountId, exchangeRate, date, note };
};

export const createTransfersTable = () =>
  new Promise(resolve => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS transfers(' +
        'id INTEGER,' +
        'value REAL,' +
        'fromAccountId INTEGER,' +
        'toAccountId INTEGER,' +
        'exchangeRate REAL,' +
        'note TEXT,' +
        'date DATETIME,' +
        'FOREIGN KEY (fromAccountId) REFERENCES accounts(id) ON DELETE SET NULL,' +
        'FOREIGN KEY (toAccountId) REFERENCES accounts(id) ON DELETE SET NULL,' +
        'PRIMARY KEY(id)' +
        ');',
        [],
        () => resolve()
      );
    });
  });


export const fetchTransfers = () =>
  new Promise(resolve => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM transfers;', [], (tx, results) => {
        const transfers = [];
        for (let i = 0; i < results.rows.length; i++) {
          transfers.push(results.rows.item(i))
        }

        resolve(transfers);
      })
    });
  });

export const createTransfer = transferData => {
  const newTransfer = createTransferModel(transferData);

  return new Promise(resolve => {
    db.transaction(tx =>
      tx.executeSql(
        'INSERT INTO transfers (value,date,note,exchangeRate,fromAccountId,toAccountId) VALUES ($0,$1,$2,$3,$4,$5);',
        [
          newTransfer.value,
          newTransfer.date,
          newTransfer.note,
          newTransfer.exchangeRate,
          newTransfer.fromAccountId,
          newTransfer.toAccountId
        ],
        (tx, results) => resolve(results.rows.insertId)
      )
    );
  });
};

export const resetTransfers = () =>
  new Promise(resolve => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM transfers;',
        [],
        () => resolve()
      );
    })
  });
