import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useCallback, useEffect } from 'react';
import { RootStackParamList } from '../App';
import { Text, VStack } from '@gluestack-ui/themed';
import { Search } from '../components/search';
import { ResultTable } from '../components/resultTable';
import { useDataSearch } from '../components/search/useDataSearch';
import { Form } from '../types';



type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

export const HomeScreen: FC<Props> = () => {

    const { searchUserData,data,searchData } = useDataSearch();

    const handleOnSubmit = useCallback(async (values: Form) => {
        const result = await searchUserData(values);
        if (!result) {
            console.log("Not result");
            return;
        }
    }, []);

  


    return (
        <VStack space='lg' alignItems='center' bg="$backgroundLight100" h={'$full'} w={'$full'} paddingTop={40}>
            <Text color='$primary600' fontWeight="$bold" size='xl'>
                Please Search By Name
            </Text>
            <Search onSubmit={handleOnSubmit} />
            <ResultTable data={data || []} searchData={searchData || []}/>
        </VStack>

    );
};