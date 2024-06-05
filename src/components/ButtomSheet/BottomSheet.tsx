import React from "react";
import {
  Modal,
  View,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  ViewStyle,
} from "react-native";

import { resHeight, resWidth } from "../../../utils/utils";

const { height, width } = Dimensions.get("window");

interface BottomSheetProps {
  children: React.ReactNode;
  isVisible: boolean;
  height: number;
  animationType: "none" | "slide" | "fade";
  contentStyle?: StyleProp<ViewStyle>;
  offSet?: number;
  closeModal: ()=> void
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  children,
  isVisible,
  closeModal,
  height,
  animationType,
  contentStyle,
}) => {
  return (
    <Modal animationType={animationType} visible={isVisible} transparent>
      <View style={styles.overlay}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{
              marginTop: resHeight(2),
              shadowColor: "#000000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.1,
              shadowRadius: 1,
              elevation: 2,
              borderRadius: 1,
              borderColor: "#ECECEC",
              borderWidth: 0,
              height: 5,
            }}
          >
            <View style={[styles.content, contentStyle]}>
            <View style={styles.nudge} onPress={()=>closeModal()}/> 
            {children}
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0,0.25)",
    flex: 1,
    justifyContent: "flex-end",
  },
  content: {
    width,
    backgroundColor: "#fff",
    paddingTop: resHeight(2),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bottom:0,
    height: resHeight(40),
    position:"absolute"
  },
   nudge: {
    width: 40,
    height: 5,
    backgroundColor: "#a7a3b3",
    borderRadius: 2.5,
    marginBottom: 10,
  },
});

export default BottomSheet;
