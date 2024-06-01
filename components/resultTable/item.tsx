import { FC } from "react";
import { UserData } from "../../data/leaderboard";
import { HStack, Text } from "@gluestack-ui/themed";

type Props = {
    eachUserData: UserData;
    isSearchedUser: boolean;
    index: number;
    isEvenRow: boolean;
};

export const Item: FC<Props> = ({
    eachUserData,
    index,
    isSearchedUser,
    isEvenRow,
}) => {


    return (
        <HStack justifyContent="space-between" borderBottomWidth={1} padding={10} backgroundColor= {isEvenRow?"$backgroundDark300":"$white"}>
            <Text width={"45%"}>
                {eachUserData.name}
            </Text>
            <Text width={"15%"} textAlign="right">{index + 1}</Text>
            <Text width={"20%"} textAlign="right">{eachUserData.bananas}</Text>
            <Text width={"20%"} textAlign="center">{isSearchedUser ? "Yes" : "No"}</Text>
        </HStack>
    );
};
