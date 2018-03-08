export default function normalizeDate(value) {
    return value && new Date(value).toUTCString();
}
