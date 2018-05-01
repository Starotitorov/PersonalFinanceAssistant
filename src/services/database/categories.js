import db from './sqlite';

export const createCategoryModel = ({ name, icon, categoryTypeId }) => ({ name, icon, categoryTypeId });

export const createCategoriesTable = () =>
  new Promise(resolve => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS categories (id INTEGER, name TEXT, icon	TEXT, categoryTypeId INTEGER, PRIMARY KEY(id));',
        [],
        () => resolve()
      )
    })
  });

export const fetchCategories = () =>
  new Promise(resolve => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM categories;', [], (tx, results) => {
        const categories = [];
        for (let i = 0; i < results.rows.length; i++) {
          categories.push(results.rows.item(i))
        }

        resolve(categories);
      });
    });
  });

export const createCategory = categoryData => {
  const newCategory = createCategoryModel(categoryData);

  return new Promise(resolve => {
    db.transaction(tx =>
      tx.executeSql(
        'INSERT INTO categories(name,icon,categoryTypeId) VALUES ($0,$1,$2);',
        [ newCategory.name, newCategory.icon, newCategory.categoryTypeId ],
        (tx, results) => resolve(results.rows.insertId)
      )
    );
  });
};

export const deleteCategory = id =>
  new Promise(resolve => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM categories WHERE id=$0;',
        [ id ],
        () => resolve(id)
      );
    })
  });

export const editCategory = (id, categoryData) => {
  const category = createCategoryModel(categoryData);

  return new Promise(resolve => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE categories SET name=$0, icon=$1 WHERE id=$3;',
        [ category.name, category.icon, id ],
        () => resolve(id)
      );
    })
  });
};

export const resetCategories = () =>
  new Promise(resolve => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM categories;',
        [],
        () => resolve()
      );
    })
  });
