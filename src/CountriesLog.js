export default class CountriesLog {
    constructor() {
        this.countries = [
            { name: 'Antartica', position: [166.6667, -77.8494]},
            { name: 'Australia', position: [149.1244, -35.3075]},
            { name: 'Brazil', position: [-47.9297, -15.7801] },
            { name: 'Canada', position: [-75.6972, 45.4215] },
            { name: 'China', position: [116.4074, 39.9042] },
            { name: 'Germany', position: [13.4050, 52.5200] },
            { name: 'India', position: [77.2090, 28.6139] },
            { name: 'Japan', position: [139.6917, 35.6895] },
            { name: 'Russia', position: [37.6173, 55.7558] },
            { name: 'United States', position: [-77.0369, 38.9072] },
            { name: 'Philadelphia', position: [-75.165222, 39.952583] }
        ];
    }

    getAllCountries() {
        return this.countries;
    }
}