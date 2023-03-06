const formatMilliseconds = (milliseconds) => {
    const seconds = Number.parseInt(milliseconds % 60).toString().padStart(2, "0");
    const minutes = Number.parseInt(milliseconds / 60).toString().padStart(2, "0");

    return `${minutes}:${seconds}`;
}

export default formatMilliseconds;
