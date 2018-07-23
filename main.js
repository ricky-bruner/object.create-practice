
// Practice
// Your job is to create an object that represents a financial advisor and has the following properties and methods.

// Company (enumerable, writable, property)
// Specialty (enumerable, writable, property)
// Name (enumerable, property)
// Portfolio (non-enumerable, property) - Should display the stocks the advisor currently holds
// Worth (non-enumerable, method)
// Purchase (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
// Sell (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
// When sell() or purchase() are invoked, then the stock portfolio should be modified accordingly. Start off with making portfolio property an array that holds transactions.

// When you invoke the worth() method, it should look at every transaction and calculate the advisor's net worth.

const advisor = Object.create(null, {
    company:{
        value: "Gringotts",
        enumerable: true,
        writable: true
    },
    specialty:{
        value: "Goblin's",
        enumerable: true,
        writeable: true
    },
    name:{
        value: "Bill Weasley",
        enumerable: true,
        writable: false
    },
    portfolio:{
        value:[ 
            {
                symbol: "CBR",
                name: "Curse Breaking Inc",
                shares: 450,
                valuation: 34567891,
            },
            {
                symbol: "FDE",
                name: "Fighting Death Eaters, LLC",
                shares: 231,
                valuation: 4563728
            },
            {
                symbol: "SWA",
                name: "Surviving a werewolf attack, LLC",
                shares: 798,
                valuation: 89000
            },
            {
                symbol: "WWW",
                name: "Weasley's Wizarding Wheezes Co.",
                shares: 2300,
                valuation: 1000000000
            }
        ],
        enumerable: false,
        writable: true
    },
    worth:{
        value: function(){
            let total = 0
            for (let i = 0; i < this.portfolio.length; i++) {
                let stockValue = this.portfolio[i].valuation * this.portfolio[i].shares;
                total += stockValue
            }
            return total
        },
        enumerable: false
    },
    purchase:{
        value: function(symbol, name, quantity, price){
            advisor.portfolio.push({
                symbol: symbol,
                name: name,
                shares: quantity, 
                valuation: price
            })
        },
        enumerable: false
    },
    sell:{
        value: function(symbol, name, quantity, price){
                let portfolio = advisor.portfolio;
                for (let i = 0; i < portfolio.length; i++) {
                    if(portfolio[i].symbol === symbol 
                        && portfolio[i].name === name 
                        && portfolio[i].shares === quantity 
                        && portfolio[i].valuation === price){
                        console.log("got one", i);
                        portfolio.splice(i, 1);
                    }  
                }
            },
        enumerable: false
    }

});

advisor.sell("WWW", "Weasley's Wizarding Wheezes Co.", 2300, 1000000000);
console.log(advisor.worth());
console.log(advisor)



// advisor.purchase("GUP", "Growing Up Poor", 1, 10);
// console.log(advisor);


    

// if(symbol === advisor.porfolio[symbol])






// let newPortfolio = {
//     symbol: "GUP",
//     name: "Growing up poor",
//     shares: 1,
//     valuation: 12
// };

// function addPortfolio(){
//     advisor.portfolio.push(newPortfolio);
// }
// addPortfolio();
// console.log(advisor);

// let value = advisor.portfolio[2];
// console.log(value);