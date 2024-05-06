import React from "react";
import { ActivityIndicator } from "react-native";
import { Text } from "../Text/Text";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../theme/theme";
import { Box, TouchableOpacityBox, TouchableOpacityBoxProps } from "../Box/Box";

interface ButtonProps extends TouchableOpacityBoxProps{
    title: string,
    loading?: boolean
}

export function Button({ title, loading, ... touchableOpacityBoxProps}: ButtonProps) {
    const { colors } = useTheme<Theme>()
    return (
        <TouchableOpacityBox
            backgroundColor="buttonPrimary"
            paddingHorizontal="s24"
            height={50}
            alignItems="center"
            justifyContent="center"
            borderRadius="s12"
            {...touchableOpacityBoxProps}
        >
            {loading ? <ActivityIndicator /> :
                <Text bold preset="paragraphMedium" style={{color: "#fff"}}>{title}</Text>
            }
        </TouchableOpacityBox>
    )
}
