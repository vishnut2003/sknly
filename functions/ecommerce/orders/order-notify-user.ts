import OrderNotificationTemplate from "@/components/mail/order-template";
import { sendMail } from "@/functions/mail/send";
import { OrdersModelInterface } from "@/models/order";

export async function orderNotifyUser({ order }: {
    order: OrdersModelInterface,
}) {
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    const BASE_URL = process.env.BASE_URL;

    if (!ADMIN_EMAIL) {
        throw new Error('Please provide ADMIN_EMAIL in .env.')
    }

    if (!BASE_URL) {
        throw new Error("Please provide BASE_URL in .env");
    }

    await sendMail({
        subject: "Your Order is Processing",
        to: order.contactInfo.email,
        element: OrderNotificationTemplate({
            order,
            primaryText: `Hi ${order.contactInfo.name}, your Sknly order is officially getting whipped. Your showers are about to get a lot more fun!`,
            secondaryText: "We’ll notify you once your order ships with tracking details.",
            action: {
                text: "Invoice",
                href: BASE_URL + "/invoice/" + order._id.toString(),
            }
        })
    });
}