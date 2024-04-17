export default class CountriesLog {
    constructor() {
        this.countries = [
            { name: 'Antarctica', position: [166.6667, -77.8494]},
            { name: 'Australia', position: [149.1244, -35.3075]},
            { name: 'Brazil', position: [-47.9297, -15.7801] },
            { name: 'Canada', position: [-75.6972, 45.4215] },
            { name: 'China', position: [116.4074, 39.9042] },
            { name: 'Germany', position: [13.4050, 52.5200] },
            { name: 'India', position: [77.2090, 28.6139] },
            { name: 'Japan', position: [139.6917, 35.6895] },
            { name: 'Russia', position: [37.6173, 55.7558] },
            { name: 'United States', position: [-77.0369, 38.9072] },
            { name: 'Philadelphia', position: [-75.165222, 39.952583] },

            { name: 'Afghanistan', position: [67.71, 33.94] },
            { name: 'Taiwan', position: [120.96, 23.7] }, //
            { name: 'United Arab Emirates', position: [53.85, 23.42] },
            { name: 'United Kingdom', position: [-3.44, 55.38] },
            { name: 'Sweden', position: [18.64, 60.13] },
            { name: 'Spain', position: [-3.75, 40.46] },
            { name: 'Poland', position: [19.15, 51.92] },
            { name: 'North Korea', position: [127.51, 40.34] },
            { name: 'Mexico', position: [-102.55, 23.63] },
            { name: 'New Zealand', position: [174.89, -40.9] },
        ];
    }

    getAllCountries() {
        return this.countries;
    }
}