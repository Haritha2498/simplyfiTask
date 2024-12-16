

function findTravelRoute(tickets, startCity) {
    const route = [];
    const visited = new Set();

    let currentCity = startCity;
    route.push(currentCity);
    visited.add(currentCity);

    for (let i = 0; i < tickets.length; i++) {
        let nextIndex = -1;
        for (let j = 0; j < tickets.length; j++) {
            if (tickets[j][0] === currentCity && !visited.has(tickets[j][1])) {
                nextIndex = j;
                break;
            }
        }

        if (nextIndex !== -1) {
            currentCity = tickets[nextIndex][1];
            route.push(currentCity);
            visited.add(currentCity);

            tickets.splice(nextIndex, 1); 
            i--; 
        }
    }

    return route;
}

const tickets = [
    ["Paris", "Skopje"],
    ["Zurich", "Amsterdam"],
    ["Prague", "Zurich"],
    ["Barcelona", "Berlin"],
    ["Kiev", "Prague"],
    ["Skopje", "Paris"],
    ["Amsterdam", "Barcelona"],
    ["Berlin", "Amsterdam"],
    ["Berlin", "Kiev"]
];

const startCity = "Kiev";
const travelRoute = findTravelRoute(tickets, startCity);
console.log("TravelRoute:", travelRoute);

