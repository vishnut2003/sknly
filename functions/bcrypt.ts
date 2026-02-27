import bcrypt from "bcrypt"

export async function generateHash(value: string) {
    const SALT_ROUND = 15;
    const salt = await bcrypt.genSalt(SALT_ROUND)
    const hash = await bcrypt.hash(value, salt);
    return hash;
}

export async function compareHashValue(value: string, hash: string) {
    console.log("Value", value)
    console.log("Hash", hash)
    const isMatching = await bcrypt.compare(value, hash);
    return isMatching;
}