
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
        value: {
            name:"Gringotts Wizarding Bank",
            image: "images/gringotts.jpg"
        },
        enumerable: true,
        writable: true
    },
    specialty:{
        value: ["Goblin Liason", "Curse Breaking", "Investing"],
        enumerable: true,
        writeable: true
    },
    name:{
        value: {
            name: "Bill Weasley",
            image: ["images/billweasley.jpg", "images/billweasley2", "images/billweasley3"]
        },
        enumerable: true,
        writable: false
    },
    portfolio:{
        value:[ 
            {
                symbol: "CBR",
                name: "Curse Breaking Inc",
                shares: 450,
                valuation: 8.5
            },
            {
                symbol: "FDE",
                name: "Fighting Death Eaters, LLC",
                shares: 231,
                valuation: 22.5
            },
            {
                symbol: "SWA",
                name: "Surviving a werewolf attack, LLC",
                shares: 798,
                valuation: 14.8
            },
            {
                symbol: "WWW",
                name: "Weasley's Wizarding Wheezes Co.",
                shares: 2300,
                valuation: 258.6
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


console.log(advisor.worth());
console.log(advisor)



let body = document.querySelector("body");

function createMainContent(){
    let script = document.querySelector("script");
    let mainContent = document.createElement("div");
    mainContent.setAttribute("id", "main-content");
    body.insertBefore(mainContent, script);
}
createMainContent();

const mainContent = document.getElementById("main-content");

mainContent.innerHTML += 
    `<div>
        <h1>Wizdaq&trade; Profile</h1>
        <div>
            <h2>Advisor Spotlight</h2>
            <h3>Name: ${advisor.name}</h3>
            <h4>Conpany: ${advisor.company}</h4>
            <h4>Specialty: ${advisor.specialty}</h4>
        </div>
    </div>`