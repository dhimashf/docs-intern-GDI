let transactions = [
    {custId: "C001", name: "Dhimas", amount: 200000},
    {custId: "C002", name: "aisyah", amount: 300000},
    {custId: "C003", name: "farah", amount: 500000}
]

function mostLoyalCust (transaction) {
    const map = {}

    for (let i = 0; i < transaction.length; i++) {
        const transactions = transaction[i]
        if (map[transactions] !== undefined) {
            map[transactions.name] += transactions.amount
        }else {
            map[transactions.name] = transactions.amount
        }
    }    
    const key = Object.keys(map)
    let customer = key[0]
    let higher = map[key[0]]

    for (let i = 0; i < key.length; i++) {
        const currentCustomer = key[i]
        const currentAmount = map[currentCustomer]

        if (currentAmount > higher) {
            higher = currentAmount;
            customer = currentCustomer

        }
    }

    return {
        "Customer Terbaik" : customer,
        "Total Belanja" : higher
    }
}

console.log(mostLoyalCust(transactions))
