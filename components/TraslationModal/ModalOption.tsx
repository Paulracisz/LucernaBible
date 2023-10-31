import { Text, View } from "react-native";
import { IModalOptionProps } from "../../types/IModalOption";

// props needed 
// 1.) Name of Option 
// 2.) Option value 
// 3.) Function to handle option selection 
// 4.) Description 
// 5.) Styles 




export default function ModalOption({ title, description, handleTranslation }: IModalOptionProps) {
    return (
        <View>
            <Text>
                {title}
            </Text>
            <Text>
                {description}
            </Text>
        </View>
    )
}



