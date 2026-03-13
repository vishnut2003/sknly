import { Image, Page, Text, View } from "@react-pdf/renderer";
import { PropsWithChildren } from "react";
import Logo from "./assets/logo.png";

export default function InvoicePDFLayout({
    children,
}: PropsWithChildren) {
    return (
        <Page
            size="A4"
            orientation="portrait"
            style={{
                fontSize: "14px",
            }}
        >
            <View
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                }}
            >

                <View>

                    <View
                        style={{
                            padding: "15px 20px",
                            borderBottom: "1px solid #DBDBDB",
                        }}
                    >
                        <Image
                            src={Logo.src}
                            style={{
                                width: "100px"
                            }}
                        />
                    </View>

                    <View
                        style={{
                            padding: "15px 20px",
                        }}
                    >
                        {children}
                    </View>

                </View>

                <View
                    style={{
                        padding: "15px 20px",
                        borderTop: "1px solid #DBDBDB",
                    }}
                >
                    <Text
                        style={{ fontSize: "11px" }}
                    >House of Sknly. - This is auto generated Invoice.</Text>
                </View>

            </View>
        </Page>
    )
}