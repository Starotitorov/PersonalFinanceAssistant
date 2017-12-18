import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Text } from 'react-native-elements';
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
                    config.developers.map((u, i) => {
                        return <TeamMember key={i} user={u} />
                    })
                }
            </Card>
        </ScrollView>
    );
}
