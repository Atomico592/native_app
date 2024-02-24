import {Image, View} from "react-native";
import {COLORS, FONTS, SIZES} from "../constants";

const DetailsBid = ({bid}) => {
    return (
        <View>
            <Image
                source={bid.image}
                resizeMode="contain"
                style={{width: 48, height: 48}}
            />
            <View>
                <Text
                    style={{
                        fontFamily: FONTS.semiBold,
                        fontSize: SIZES.small,
                        color: COLORS.primary
                    }}
                >
                    Bid placed by {bid.name}
                </Text>
                <Text
                    style={{
                        fontFamily: FONTS.regular,
                        fontSize: SIZES.small - 2,
                        color: COLORS.secondary,
                        marginTop: 3
                    }}
                >
                    {bid.date}
                </Text>
            </View>
        </View>
    );
};

export default DetailsBid;