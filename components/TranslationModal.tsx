import { ScrollView, Text, Modal, StyleSheet, StatusBar } from "react-native"
import { Feather, AntDesign } from "@expo/vector-icons"


export default function TranslationModal() {



    const readerStyles = StyleSheet.create({
        scrollView: {
            flex: 1,
            backgroundColor: "black",
            margin: 0,
            padding: 15,
            paddingTop: 10,
            paddingTop: StatusBar.currentHeight,
        },
        versionsHeader: {
            alignItems: "center", // Center text horizontally
            justifyContent: "center", // Center text vertically
            flex: 1, // Add flex to center content vertically
            flexDirection: "row", // Add flexDirection to align items horizontally
        },
        bookMenuHeader: {
            paddingBottom: 35,
        },
        bookMenuTitle: {
            color: "white",
            fontSize: 35,
            paddingBottom: 25,
        },
        infoFlex: {
            flex: 1, // Add flex to center content vertically
            flexDirection: "row", // Add flexDirection to align items horizontally
            alignItems: "center", // Center text horizontally
            justifyContent: "center", // Center text vertically
        },
        infoIcons: {
            textAlign: "right",
            alignSelf: "flex-end",
        },
        container: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
            justifyContent: "center",
            flexWrap: "wrap",
        },
        bookTitles: {
            color: "white",
            fontSize: 25,
            paddingBottom: 55,
            lineHeight: 25,
        },
        bookMenuScrollViewer: {
            flex: 1,
            backgroundColor: "black",
            borderRadius: 5,
            margin: 0,
            paddingBottom: 155,
            paddingHorizontal: 25,
        },
        chapterNumbers: {
            color: "white",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            backgroundColor: "gray",
            borderRadius: 5,
            width: 45,
            height: 45,
            borderWidth: 2,
            textAlign: "center",
            textAlignVertical: "center",
            borderColor: "black",
            fontSize: 20,
        },
        translationName: {
            fontSize: 25,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            textAlign: "left",
        },
        versions: {
            color: "white",
            textAlign: "right",
            fontWeight: "bold",
            fontSize: 32,
        },
        expandedTranslationName: {
            fontSize: 15,
        },
        translationMenu: {
            width: "100%",
            justifyContent: "space-between",
            fontSize: 25,
            padding: 15,
            color: "white",
        },
        modalViewer: {
            flex: 1,
            backgroundColor: "black",
            borderRadius: 5,
            margin: 0,
            padding: 25,
            paddingTop: StatusBar.currentHeight,
        },
        modal: {
            width: "80%",
            height: "80%",
        },
        closeButton: {
            marginLeft: "auto", // Move the button to the right
            marginRight: 10, // Adjust the right margin as needed
            marginTop: StatusBar.currentHeight + 5, // Adjust the top margin as needed
        },
        chapterNumber: {
            fontSize: 85,
            color: "#fff",
            textAlign: "center",
        },
        header: {
            fontSize: 25,
            color: "#bababa",
            fontWeight: "bold",
            margin: 15,
            textAlign: "center",
        },
        translation: {
            borderRadius: 500,
            backgroundColor: "#404040",
            top: 0,
            flex: 1,
            color: "whitesmoke",
            fontWeight: "bold",
            width: "15%",
            textAlign: "center",
            fontSize: 15,
            padding: 5,
        },
        text: {
            fontSize: 25,
            lineHeight: 40,
            color: "#fff",
            marginBottom: 100,
            textAlign: "left",
        },
    });




    return (
        <>
            <ScrollView ref={scrollViewRef} style={readerStyles.scrollView}>
                <Modal
                    transparent={true}
                    animationType="slide" // Add animationType to control the modal animation
                    style={readerStyles.modal}
                    visible={showTranslationModal}
                >
                    <ScrollView style={readerStyles.modalViewer}>
                        <Text style={readerStyles.versionsHeader}>
                            <Text
                                onPress={() => openTranslationModal()}
                                style={readerStyles.closeButton}
                            >
                                <AntDesign name="arrowleft" size={34} color="white" />
                            </Text>
                            <Text style={readerStyles.versions}>Versions</Text>
                        </Text>

                        <Text
                            onPress={() => setTranslation(kjv, "KJV")}
                            style={readerStyles.translationMenu}
                        >
                            <Text style={readerStyles.infoFlex}>
                                <Text style={readerStyles.translationName}>KJV</Text>
                                {"\n"}
                                <Text style={readerStyles.expandedTranslationName}>
                                    The King James Version
                                </Text>
                                <Feather
                                    name="info"
                                    size={24}
                                    style={readerStyles.infoIcons}
                                    color="white"
                                    onPress={() => openTranslationInfo("KJV")}
                                />
                            </Text>
                        </Text>

                        <Text
                            onPress={() => setTranslation(asv, "ASV")}
                            style={readerStyles.translationMenu}
                        >
                            <Text style={readerStyles.infoFlex}>
                                <Text style={readerStyles.translationName}>ASV</Text>
                                {"\n"}
                                <Text style={readerStyles.expandedTranslationName}>
                                    The American Standard Version
                                </Text>
                                <Feather
                                    name="info"
                                    size={24}
                                    style={readerStyles.infoIcons}
                                    color="white"
                                    onPress={() => openTranslationInfo("KJV")}
                                />
                            </Text>
                        </Text>

                        <Text
                            onPress={() => setTranslation(bbe, "BBE")}
                            style={readerStyles.translationMenu}
                        >
                            <Text style={readerStyles.infoFlex}>
                                <Text style={readerStyles.translationName}>BBE</Text>
                                {"\n"}
                                <Text style={readerStyles.expandedTranslationName}>
                                    The Bible in Basic English
                                </Text>
                                <Feather
                                    name="info"
                                    size={24}
                                    style={readerStyles.infoIcons}
                                    color="white"
                                    onPress={() => openTranslationInfo("BBE")}
                                />
                            </Text>
                        </Text>

                        <Text
                            onPress={() => setTranslation(web, "WEB")}
                            style={readerStyles.translationMenu}
                        >
                            <Text style={readerStyles.infoFlex}>
                                <Text style={readerStyles.translationName}>WEB</Text>
                                {"\n"}
                                <Text style={readerStyles.expandedTranslationName}>
                                    The Word English Bible
                                </Text>
                                <Feather
                                    name="info"
                                    size={24}
                                    style={readerStyles.infoIcons}
                                    color="white"
                                    onPress={() => openTranslationInfo("WEB")}
                                />
                            </Text>
                        </Text>

                        <Text
                            onPress={() => setTranslation(ylt, "YLT")}
                            style={readerStyles.translationMenu}
                        >
                            <Text style={readerStyles.translationName}>YLT</Text>
                            {"\n"}
                            <Text style={readerStyles.infoFlex}>
                                <Text style={readerStyles.expandedTranslationName}>
                                    Young's Literal Translation
                                </Text>
                                <Feather
                                    name="info"
                                    size={24}
                                    style={readerStyles.infoIcons}
                                    color="white"
                                    onPress={() => openTranslationInfo("YLT")}
                                />
                            </Text>
                        </Text>
                    </ScrollView>
                </Modal>
                <Modal
                    transparent={true}
                    animationType="slide"
                    style={readerStyles.modal}
                    visible={showBookMenu}
                >
                    <ScrollView style={readerStyles.bookMenuScrollViewer}>
                        <Text style={readerStyles.bookMenuHeader}>
                            <Text
                                onPress={() => openBookMenu()}
                                style={readerStyles.closeButton}
                            >
                                <AntDesign
                                    style={readerStyles.bookMenuArrow}
                                    name="arrowleft"
                                    size={34}
                                    color="white"
                                />
                            </Text>
                            <Text style={readerStyles.bookMenuTitle}>Books</Text>
                        </Text>
                        {/* Conditional rendering for chapter numbers */}
                        {showBookMenu && (
                            <>
                                {bibleBooks.map((bookName, bookIndex) => (
                                    <View key={bookIndex}>
                                        <Text
                                            onPress={() => setSelectedBook(bookIndex + 1)}
                                            style={readerStyles.bookTitles}
                                        >
                                            {bookName}
                                        </Text>
                                        {renderChapterNumbers(bookIndex + 1)}
                                    </View>
                                ))}
                            </>
                        )}
                    </ScrollView>
                </Modal>
                <Text
                    onPress={() => openTranslationModal()}
                    style={readerStyles.translation}
                >
                    {currentTranslationName}
                </Text>
            </ScrollView>
        </>
    );
}
