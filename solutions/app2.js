
const HU = {
    date(date) {
        return new Intl.DateTimeFormat("hu-hu").format(date);
    },
    curreny(ammount) {
        return new Intl.NumberFormat("hu-hu", {"style": "currency", "currency": "HUF"}).format(ammount);
    },
    list(elements) {
        return elements.slice(0, -1).join(", ") + ` és ${elements[elements.length - 1]}`;
    },
}




export default HU
