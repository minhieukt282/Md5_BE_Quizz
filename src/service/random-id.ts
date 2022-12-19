export class RandomId {
    random = () => {
        let today = new Date()
        let time = today.getTime()*Math.floor(Math.random() * 1000);
        return time
    }
}