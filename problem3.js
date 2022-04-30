
class Account {
    constructor(user){
        this.name = user
        this.balance = 0
    }

    credit (amount) {
        this.balance += amount
    }
    describe () {
        return `owner: ${this.name}, balance: ${this.balance}`
    }
}

const accountList = [new Account('Sean'), new Account('Brad'), new Account('Georges'),]

accountList.forEach(item => {
    item.credit(+(1000))
    console.log(item.describe())
});