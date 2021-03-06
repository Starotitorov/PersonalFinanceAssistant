/*
 * index.js
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
import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'react-redux';
import { setJSExceptionHandler } from 'react-native-exception-handler';
import { configureStore } from 'src/store';
import JSExceptionHandler from './JSExceptionHandler';
import App from './screens/App';
// import { mockAPI } from '../mocks';
// global.fetch = mockAPI(global.fetch);

setJSExceptionHandler(JSExceptionHandler);

const store = configureStore();

export default function Application() {
  return (
    <Provider store={ store }>
      <App />
    </Provider>
  );
}
