let date = new Date();

let currentMonth = new Date().getMonth();

let pageDate = element().getText();

let dates = pageDate.split('-')

expect(dates[0]).to.be.equla(currentMonth);