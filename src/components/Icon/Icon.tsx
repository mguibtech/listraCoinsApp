import React from "react";
import { UserIcon } from "../../assets/icons/UserIcon";
import { LockIcon } from "../../assets/icons/LockIcon";
import { Theme, ThemeColors } from "../../theme/theme";
import { useTheme } from "@shopify/restyle";
import { useAppTheme } from "../../hooks/useAppTheme";

export interface IconBase{
    size?: number;
    color?: string;
}

interface Props{
    name: IconNames;
    color?: ThemeColors;
    size?: number
}

export function Icon({name, color = "backgrounContrast", size}: Props){
    const {colors} = useAppTheme();
    const SVGIcon = iconRegistry[name]

    return <SVGIcon color={colors[color]} size={size}/>
}


const iconRegistry={
    user: UserIcon,
    lock: LockIcon
}

type IconType = typeof iconRegistry;
type IconNames = keyof IconType;