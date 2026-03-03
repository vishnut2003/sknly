export function FormateDateObject({ timeStamp }: {
    timeStamp: number
}) {
    const date = new Date(timeStamp)

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes} ${ampm}`;

    const formattedDate = `${day}/${month}/${year} ${formattedTime}`;

    const today = new Date();
    const yesterday = new Date(Date.now() - 86400000);

    if (!isDifferentDay(today, date)) {
        return "Today" + ` ${formattedTime}`;
    } else if (!isDifferentDay(yesterday, date)) {
        return "Yesterday" + ` ${formattedTime}`;
    }

    return formattedDate;
}

export function isDifferentDay(currentDate: Date, prevDate: Date) {
    const isDifferent =
        currentDate.getFullYear() !== prevDate.getFullYear() ||
        currentDate.getMonth() !== prevDate.getMonth() ||
        currentDate.getDate() !== prevDate.getDate();

    return isDifferent;
}