/*
 * cacheService.js
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
import md5 from 'md5';
import { CacheError } from './errors';

const ASYNC_STORAGE_KEY_PREFIX = '@PersonalFinanceAssistant:cache-';

const generateStorageKey = url => ASYNC_STORAGE_KEY_PREFIX + md5(url);

export const save = async (url, data) => AsyncStorage.setItem(generateStorageKey(url), JSON.stringify(data));

export const load = async url => {
  const data = await AsyncStorage.getItem(generateStorageKey(url));

  if (typeof data !== 'string') {
    throw new CacheError();
  }

  return JSON.parse(data);
};

export const clear = async () => {
  const keys = await AsyncStorage.getAllKeys();
  const cacheKeys = keys.filter(key => key.startsWith(ASYNC_STORAGE_KEY_PREFIX));

  AsyncStorage.multiRemove(cacheKeys);
};
