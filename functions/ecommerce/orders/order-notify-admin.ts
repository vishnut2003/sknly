import OrderNotificationTemplate from "@/components/mail/order-template";
import { sendMail } from "@/functions/mail/send";
import { OrdersModelInterface } from "@/models/order";

export async function OrderNotifyAdmin({ order }: {
    order: OrdersModelInterface,
}) {

    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    if (!ADMIN_EMAIL) {
        throw new Error('Please provide ADMIN_EMAIL in .env.')
    }

    await sendMail({
        subject: "New Order On Sknly",
        to: ADMIN_EMAIL,
        element: OrderNotificationTemplate({
            order,
            primaryText: "New Order Recieved on Sknly"
        })
    });
}