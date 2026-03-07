import crypto from "crypto";

export function generateVerifyCode(length = 6) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";

    for (let i = 0; i < length; i++) {
        const index = crypto.randomInt(0, chars.length);
        code += chars[index];
    }

    return code;
}