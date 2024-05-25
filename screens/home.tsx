import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { RootStackParamList } from '../App';
import { Text, VStack } from '@gluestack-ui/themed';
import { Search } from '../components/search';
import { ResultTable } from '../components/resultTable';



type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

export const HomeScreen: FC<Props> = ({ navigation }) => {
    return (
        <VStack space='lg' alignItems='center' bg="$backgroundLight100" h={'$full'} w={'$full'} paddingTop={40}>
            <Text color='$primary600'  fontWeight="$bold" size='xl'>
                Please Search By Name
            </Text>
            <Search />
            <ResultTable />
        </VStack>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textBoxContainerStyle: {
        flex: 1,
        padding: 0,
        alignItems: 'flex-end',
    },
    buttonContainer: {
        marginLeft: 10,
        paddingBottom: 20,
    },
});