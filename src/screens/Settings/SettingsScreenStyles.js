/*
 * SettingsScreenStyles.js
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

import { StyleSheet } from 'react-native';
import { margins, fontSizes, colors } from 'src/styles';

export default StyleSheet.create({
  userName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: fontSizes.FONT_SIZE_XL,
    marginBottom: margins.MARGIN_L
  },
  button: {
    marginBottom: margins.MARGIN_M
  },
  gravatar: {
    width: 200,
    height: 200,
    marginTop: margins.MARGIN_L,
    marginBottom: margins.MARGIN_M
  },
  profileCard: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileCardContainer: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: margins.MARGIN_L
  },
  changePassword: {
    textAlign: 'center',
    color: colors.COLOR_SECONDARY
  },
  logout: {
    padding: 2.5,
    textAlign: 'center',
    color: colors.COLOR_RED
  }
});
