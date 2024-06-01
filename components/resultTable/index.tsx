import { FlatList, HStack, Text, VStack } from "@gluestack-ui/themed"
import { Item } from "./item";
import { UserData } from "../../data/leaderboard";


export const ResultTable = ({ data, searchData }: { data: UserData[], searchData: UserData[] }) => {
    return (
        <VStack w={'$full'} padding={10}>
            <HStack justifyContent="space-between" borderBottomWidth={1} padding={10} borderColor="$primary200" bgColor='$primary500'>
                <Text width={"45%"} fontWeight="bold" color="$white">Name</Text>
                <Text width={"15%"} fontWeight="bold" color="$white">Rank</Text>
                <Text width={"20%"} fontWeight="bold" color="$white">Bananas</Text>
                <Text width={"20%"} fontWeight="bold" color="$white">Searched</Text>
            </HStack>
            <FlatList
                data={data}
                renderItem={({ item, index }) => <Item eachUserData={item as UserData} index={index} isSearchedUser={searchData.find((eachData) => eachData.uid === (item as UserData).uid)?true:false} isEvenRow={index % 2 === 0} />}
                keyExtractor={(item) => (item as UserData).uid}
            />
        </VStack>
    )
}