/*
 * CategoryTabsScreen.js
 *
 * Copyright (c) 2017 Artsiom Staratsitarau
 *
 * This file is a part of PersonalFinanceAssistant.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import CategoriesTabNavigator from './CategoriesTabNavigator';
import CategoryTabs from './components/CategoryTabs';
import AddCategoryButton from './components/AddCategoryButton';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class CategoryTabsScreen extends Component {
  static router = CategoriesTabNavigator.router;

  render() {
    const { navigation } = this.props;

    return (
      <CategoryTabs style={ styles.container }>
        <CategoriesTabNavigator navigation={ navigation } />
        <AddCategoryButton />
      </CategoryTabs>
    );
  }
}
