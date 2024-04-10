class StringBuilder {
    constructor() {
        this.strings = [];
    }

    append(str) {
        this.strings.push(str);
    }

    toString() {
        return this.strings.join("");
    }
    clear() {
        this.strings = [];
    }
}
module.exports = StringBuilder;
