import { Box, Button, ButtonText, HStack, Input, InputField } from "@gluestack-ui/themed";
import { FC, useCallback } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { Form } from "../../types";

type Props = {
    onSubmit: (values: Form) => void;
}

export const Search: FC<Props> = ({ onSubmit }) => {
    const { control, handleSubmit, reset } = useForm<Form>({
        defaultValues: {
            name: ""
        }
    });
    const watchName = useWatch({ name: "name", control });

    const handleOnSubmit = useCallback(async (values: Form) => {
        reset();
        onSubmit(values);
    }, []);


    return (
        <HStack space='sm'>
            <Box w={'$64'}>
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Input
                            variant="outline"
                            size="md"
                            borderColor="$primary300"
                            borderRadius={'$md'}


                        >
                            <InputField placeholder="Enter Text here" onChangeText={(text) => field.onChange(text)} value={field.value} />
                        </Input>
                    )}
                />

            </Box>
            <Button
                size="md"
                variant="solid"
                bg="$primary600"
                onPress={handleSubmit(handleOnSubmit)}
                isDisabled={watchName.length === 0}

            >
                {/* {loading && <ButtonSpinner />} */}
                <ButtonText>Search </ButtonText>
            </Button>

        </HStack>
    )
}