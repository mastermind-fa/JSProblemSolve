const payments = [900, 2700, 3400];
const livingCost = 10000;

const monthlySavings = (payments, livingCost) => {
    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
        return "invalid input";
    }
    let total = 0;
    for(let i=0;i<payments.length;i++){
        if(payments[i]>=3000){
            total += payments[i]-(payments[i]*0.2);
        }
        else{
            total += payments[i];
        }
        
    }
    total -= livingCost;
        if(total < 0){
            return "earn more";
        }
        return total;

};
console.log(monthlySavings(payments, livingCost));
console.log(monthlySavings( livingCost,payments));



