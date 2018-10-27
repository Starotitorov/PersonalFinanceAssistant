/*
 * AboutScreen.js
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

import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import { Card } from 'src/components';
import config from 'src/config';
import TeamMember from './components/TeamMember';

export default function AboutScreen() {
  return (
    <ScrollView>
      <Card>
        <Text h4>
          Personal finance assistant
        </Text>
        <Text>
          - application, which helps you in controlling your expenses and incomes.
        </Text>
      </Card>
      <Card title="TEAM">
        {
          config.developers.map((u, i) => <TeamMember key={ i } user={ u } />)
        }
      </Card>
    </ScrollView>
  );
}
