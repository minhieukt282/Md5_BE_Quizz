"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomId = void 0;
class RandomId {
    constructor() {
        this.random = () => {
            let today = new Date();
            let time = today.getTime() * Math.floor(Math.random() * 1000);
            return time;
        };
    }
}
exports.RandomId = RandomId;
//# sourceMappingURL=random-id.js.map