/*
 * JWTStorage.js
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

import AsyncStorage from '@react-native-community/async-storage';
import { TOKEN_KEY } from 'src/constants/asyncStorage';

let token = null;

export const setToken = async value => {
  await AsyncStorage.setItem(TOKEN_KEY, JSON.stringify(value));

  token = value;
};

export const getToken = async () => {
  if (!token) {
    const tokenObject = await AsyncStorage.getItem(TOKEN_KEY);

    token = JSON.parse(tokenObject);
  }

  return token;
};

export const removeToken = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY);

  token = null;
};
