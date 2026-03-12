import OrderNotificationTemplate from "@/components/mail/order-template";
import { sendMail } from "@/functions/mail/send";
import { OrdersModelInterface } from "@/models/order";

export async function orderNotifyUser({ order }: {
    order: OrdersModelInterface,
}) {
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    if (!ADMIN_EMAIL) {
        throw new Error('Please provide ADMIN_EMAIL in .env.')
    }

    await sendMail({
        subject: "New Order On Sknly",
        to: order.contactInfo.email,
        element: OrderNotificationTemplate({
            order,
            primaryText: "Your Sknly order is officially in. 🎉 We're getting your whipped bodycare ready for dispatch.",
            secondaryText: "We’ll notify you once your order ships with tracking details."
        })
    });
}