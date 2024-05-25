import { Box, Button, ButtonText, HStack, Input, InputField } from "@gluestack-ui/themed";
import { FC } from "react";

export const Search: FC = () => {
    return (
        <HStack space='sm'>
            <Box w={'$64'}>
                <Input
                    variant="outline"
                    size="md"
                    borderColor="$primary300"
                    borderRadius={'$md'}
                   
                >
                    <InputField placeholder="Enter Text here" />
                </Input>
            </Box>
            <Button
                size="md"
                variant="solid"
                bg="$primary600"
            >
                <ButtonText>Search </ButtonText>
            </Button>

        </HStack>
    )
}