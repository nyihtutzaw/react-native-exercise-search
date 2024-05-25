import { FlatList, HStack, Text, VStack } from "@gluestack-ui/themed"


const dummyData: { id: number, text: string }[] = [
    {
        id: 1,
        text: "ABC"
    },
    {
        id: 2,
        text: "ABCD"
    },
]



export const ResultTable = () => {
    return (
        <VStack w={'$full'} padding={10}>
            <HStack justifyContent="space-between" borderBottomWidth={1} padding={10} borderColor="$primary200" bgColor='$primary500'>
                <Text fontWeight="bold" textAlign="center" color="$white">Name</Text>
                <Text fontWeight="bold" textAlign="center" color="$white">Rank</Text>
                <Text fontWeight="bold" textAlign="center" color="$white">Bananas</Text>
                <Text fontWeight="bold" textAlign="center" color="$white">isSearchedUser</Text>
            </HStack>
            <FlatList
                data={dummyData}
                renderItem={({ item, index }) => <HStack justifyContent="space-between" borderBottomWidth={1} padding={10} >
                    <Text fontWeight="bold" textAlign="center">Name</Text>
                    <Text fontWeight="bold" textAlign="center" bgColor="$primary">Rank</Text>
                    <Text fontWeight="bold" textAlign="center" bgColor="$primary">Bananas</Text>
                    <Text fontWeight="bold" textAlign="center" bgColor="$primary">isSearchedUser</Text>
                </HStack>}
                keyExtractor={(item) => item.id}
            />
        </VStack>
    )
}