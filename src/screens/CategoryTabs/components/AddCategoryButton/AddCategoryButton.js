import React from 'react';
import { ActionButton } from 'src/components';

export default function AddCategoryButton({ addCategory }) {
  return (
    <ActionButton.Button
      type={ ActionButton.types.ADD }
      onPress={ addCategory } />
  );
}
