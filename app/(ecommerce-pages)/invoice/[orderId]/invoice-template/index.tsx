import { Document, Text, View } from "@react-pdf/renderer";
import InvoicePDFLayout from "./page-layout";
import { OrdersModelInterface } from "@/models/order";

export default function InvoiceTemplatePDF({
    order,
}: {
    order: OrdersModelInterface,
}) {

    const products: {
        name: string,
        price: string,
        qty: number,
        subTotal: number | string,
        isBundel?: boolean,
    }[] = order.orderItems.singleItems.map(p => ({
        name: p.name,
        price: p.price.toString(),
        qty: p.quantity,
        subTotal: p.price * p.quantity,
    }));

    if (order.orderItems.bundle?.size) {
        let subTotal = 0;
        const priceList: number[] = [];
        for (const product of order.orderItems.bundle.items) {
            subTotal += product.price * product.quantity;
            priceList.push(product.price);
        }

        const minPrice = Math.min(...priceList);
        const maxPrice = Math.max(...priceList);

        let price: string;

        if (minPrice === maxPrice) {
            price = `${maxPrice}`;
        } else {
            price = `${minPrice} - ${maxPrice}`;
        }

        products.push({
            name: `Bundle of ${order.orderItems.bundle.size}`,
            price,
            qty: order.orderItems.bundle.size,
            subTotal,
            isBundel: true,
        })

    }

    return (
        <Document
            style={{ fontFamily: 'Open Sans' }}
            title="Order Invoice"
        >
            <InvoicePDFLayout>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "15px",
                            maxWidth: "300px"
                        }}
                    >

                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "3px",
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "900",
                                }}
                            >From:</Text>
                            <Text>House of Sknly.</Text>
                            <Text
                                style={{
                                    maxWidth: "200px",
                                    fontSize: "11px"
                                }}
                            >308, 3rd Floor, Vardhaman Diamond Plaza, DB Gupta road, Motia khan, New Delhi, Delhi, 110055, India</Text>
                        </View>

                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "3px",
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "900",
                                }}
                            >To:</Text>
                            <Text>{order.contactInfo.name}</Text>
                            <View
                                style={{
                                    fontSize: "11px",
                                }}
                            >
                                <Text>{order.contactInfo.phone}</Text>
                                <Text>{order.contactInfo.email}</Text>
                            </View>

                            <View
                                style={{
                                    fontSize: "11px",
                                }}
                            >
                                {
                                    [
                                        {
                                            label: "Address Line 1",
                                            value: order.shippingAddress.line1,
                                        },
                                        {
                                            label: "Address Line 2",
                                            value: order.shippingAddress.line2,
                                            disable: order.shippingAddress.line2 ? false : true,
                                        },
                                        {
                                            label: "State",
                                            value: order.shippingAddress.state,
                                        },
                                        {
                                            label: "City",
                                            value: order.shippingAddress.city,
                                        },
                                        {
                                            label: "Pincode",
                                            value: order.shippingAddress.pincode,
                                        }
                                    ].map((item, index) => (
                                        !item.disable && (
                                            <View
                                                key={index}
                                                style={{
                                                    display: "flex",
                                                    flexDirection: (index === 0 || index === 1) ? "column" : "row",
                                                    margin: index !== 0 ? "3px 0 0 0" : undefined
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        fontWeight: "900",
                                                    }}
                                                >{item.label}:</Text>
                                                <Text>{item.value}</Text>
                                            </View>
                                        )
                                    ))
                                }
                            </View>

                        </View>

                    </View>

                    <View>
                        <View>
                            <View>
                                {
                                    [
                                        {
                                            label: "Invoice No",
                                            value: "#" + order.orderNo,
                                        },
                                        {
                                            label: "Date",
                                            value: (order.createdAt instanceof Date ? order.createdAt : new Date(order.createdAt)).toISOString().split("T")[0].split("-").join("/"),
                                        }
                                    ].map((item, index) => (
                                        <View
                                            key={index}
                                            style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                gap: "5px",
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontWeight: "900",
                                                    width: "105px",
                                                }}
                                            >{item.label}:</Text>
                                            <Text
                                                style={{
                                                    width: "105px",
                                                }}
                                            >{item.value}</Text>
                                        </View>
                                    ))
                                }
                            </View>
                        </View>
                    </View>

                </View>

                <View
                    style={{
                        margin: "30px 0",
                    }}
                >
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            backgroundColor: "#BA131C",
                            color: "#ffffff",
                            fontWeight: "900",
                        }}
                    >
                        {
                            [
                                {
                                    value: "Product",
                                    className: {
                                        width: "100%"
                                    },
                                },
                                {
                                    value: "Price",
                                    className: {
                                        width: "230px"
                                    },
                                },
                                {
                                    value: "Quantity",
                                    className: {
                                        width: "230px"
                                    },
                                },
                                {
                                    value: "Total",
                                    className: {
                                        width: "230px"
                                    }
                                }
                            ].map((col, index) => (
                                <View
                                    key={index}
                                    style={{
                                        ...col.className,
                                        padding: "10px 20px",
                                    }}
                                >
                                    <Text>{col.value}</Text>
                                </View>
                            ))
                        }
                    </View>
                    {products.map((product, index) => (
                        <View
                            key={index}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                backgroundColor: index % 2 ? "#EDEDED" : "#FFFFFF",
                            }}
                        >
                            {
                                [
                                    {
                                        value: product.name,
                                        className: {
                                            width: "100%"
                                        },
                                    },
                                    {
                                        value: product.price,
                                        className: {
                                            width: "230px"
                                        },
                                    },
                                    {
                                        value: product.qty,
                                        className: {
                                            width: "230px"
                                        },
                                    },
                                    {
                                        value: product.subTotal + "/-",
                                        className: {
                                            width: "230px"
                                        }
                                    }
                                ].map((col, index) => (
                                    <View
                                        key={index}
                                        style={{
                                            ...col.className,
                                            padding: "10px 20px",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontWeight: index === 0 ? "900" : undefined,
                                            }}
                                        >{col.value}</Text>
                                    </View>
                                ))
                            }
                        </View>
                    ))}

                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            margin: "20px 0",
                            justifyContent: "flex-end",
                        }}
                    >
                        <View
                            style={{
                                border: "1px solid #EDEDED"
                            }}
                        >
                            {
                                [
                                    {
                                        label: "Sub Total",
                                        value: order.subTotal + "/-",
                                    },
                                    {
                                        label: "Delivery Fee",
                                        value: order.deliveryFee + "/-",
                                    },
                                    {
                                        label: "Discount",
                                        value: "-" + order.discount + "/-",
                                    },
                                    {
                                        label: "COD Fee",
                                        value: order.codFee + "/-"
                                    },
                                    {
                                        label: "Total",
                                        value: order.total + "/-",
                                    }
                                ].map((row, index) => (
                                    <View
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            backgroundColor: index % 2 ? "#EDEDED" : "#FFFFFF"
                                        }}
                                        key={index}
                                    >
                                        <View
                                            style={{
                                                width: "130px",
                                                padding: "10px 20px",
                                                fontWeight: "900",
                                            }}
                                        >
                                            <Text>{row.label}</Text>
                                        </View>
                                        <View
                                            style={{
                                                width: "130px",
                                                padding: "10px 20px"
                                            }}
                                        >
                                            <Text>{row.value}</Text>
                                        </View>
                                    </View>
                                ))
                            }
                        </View>
                    </View>

                </View>

            </InvoicePDFLayout>
        </Document>
    )
}