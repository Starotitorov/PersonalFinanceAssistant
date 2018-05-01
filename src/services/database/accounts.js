import db from './sqlite';

export const createAccountModel = props => {
  const {
    name,
    icon,
    initialBalance,
    initialDate = new Date(),
    currency,
  } = props;

  return { name, icon, initialBalance: Number(initialBalance), initialDate, currency };
};

export const createAccountsTable = () =>
  new Promise(resolve => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS accounts (id INTEGER, name TEXT, icon	TEXT, currency	TEXT, initialBalance	REAL, initialDate DATETIME, PRIMARY KEY(id));',
        [],
        () => resolve()
      );
    })
  });

export const fetchAccounts = () =>
  new Promise(resolve => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM accounts;', [], (tx, results) => {
        const accounts = [];
        for (let i = 0; i < results.rows.length; i++) {
          accounts.push(results.rows.item(i))
        }

        resolve(accounts);
      });
    });
  });

export const createAccount = accountData => {
  const newAccount = createAccountModel(accountData);

  return new Promise(resolve => {
    db.transaction(tx =>
      tx.executeSql(
        'INSERT INTO accounts (name,icon,currency,initialBalance,initialDate) VALUES ($0,$1,$2,$3,$4);',
        [ newAccount.name, newAccount.icon, newAccount.currency, newAccount.initialBalance, newAccount.initialDate ],
        (tx, results) => resolve(results.rows.insertId)
      )
    );
  });
};

export const deleteAccount = id =>
  new Promise(resolve => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM accounts WHERE id=$0;',
        [ id ],
        () => resolve(id)
      );
    })
  });

export const editAccount = (id, accountData) => {
  const account = createAccountModel(accountData);

  return new Promise(resolve => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE accounts SET name=$0, icon=$1, initialDate=$2 WHERE id=$3;',
        [ account.name, account.icon, account.initialDate, id ],
        () => resolve(id)
      );
    })
  });
};

export const resetAccounts = () =>
  new Promise(resolve => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM accounts;',
        [],
        () => resolve()
      );
    })
  });

