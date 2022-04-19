export const validator = ({type, required = false}) => {
    const REGEX_HASH = {
        text: /[a-zA-Z ]+/,
        email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        url: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
    };

    return (value) => {
        const regex = REGEX_HASH[type];

        if (!value) return !required;

        return regex.test(value);
    }
}