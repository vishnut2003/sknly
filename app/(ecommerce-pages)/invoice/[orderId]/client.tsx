'use client';

import { useIsMobile } from "@/hooks/use-mobile";
import { Font, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import InvoiceTemplatePDF from "./invoice-template";
import { OrdersModelInterface } from "@/models/order";

const OrderInvoicePDFClient = ({
    order,
}: {
    order: OrdersModelInterface,
}) => {

    const isMobile = useIsMobile();

    // React-PDF Configs
    Font.register({
        family: 'Open Sans', fonts: [
            { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
            { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf', fontWeight: 600 }
        ]
    })

    if (isMobile) {
        return (
            <div
                className="text-center flex items-center justify-center flex-col gap-3"
            >
                <p
                    className="font-semibold"
                >PDF Viewer is not available on mobile.</p>
                <PDFDownloadLink
                    className="bg-[#BA131C] py-3 w-50 rounded-lg block text-center text-white font-semibold"
                    document={
                        <InvoiceTemplatePDF
                            order={order}
                        />
                    }
                >
                    Download
                </PDFDownloadLink>
            </div>
        )
    }

    return (
        <div
            className="w-full"
        >
            <PDFViewer
                className="w-full min-h-screen"
            >
                <InvoiceTemplatePDF
                    order={order}
                />
            </PDFViewer>
        </div>
    )
}

export default OrderInvoicePDFClient