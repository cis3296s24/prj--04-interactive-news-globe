export default class CountriesLog {
    constructor() {
        this.countries = [
            { name: 'Antarctica', position: [166.6667, -77.8494], flag: 'flags/antarctica.png' },
            { name: 'au', position: [149.1244, -35.3075], flag: 'flags/australia.png' },
            { name: 'br', position: [-47.9297, -15.7801], flag: 'flags/brazil.png' },
            { name: 'ca', position: [-75.6972, 45.4215], flag: 'flags/canada.png' },
            { name: 'cn', position: [116.4074, 39.9042], flag: 'flags/china.png' },
            { name: 'de', position: [13.4050, 52.5200], flag: 'flags/germany.png' },
            { name: 'in', position: [77.2090, 28.6139], flag: 'flags/india.png' },
            { name: 'jp', position: [139.6917, 35.6895], flag: 'flags/japan.png' },
            { name: 'ru', position: [37.6173, 55.7558], flag: 'flags/russia.png' },
            { name: 'us', position: [-77.0369, 38.9072], flag: 'united states.png' },
            { name: 'tw', position: [120.96, 23.7], flag: 'flags/taiwan.png' },
            { name: 'United Arab Emirates', position: [53.85, 23.42], flag: 'flags/united arab emirates.png' },
            { name: 'uk', position: [-3.44, 55.38], flag: 'flags/united kingdom.png' },
            { name: 'se', position: [18.64, 60.13], flag: 'flags/sweden.png' },
            { name: 'Spain', position: [-3.75, 40.46], flag: 'flags/spain.png' },
            { name: 'Poland', position: [19.15, 51.92], flag: 'flags/poland.png' },
            { name: 'North Korea', position: [127.51, 40.34], flag: 'flags/north korea.png' },
            { name: 'Mexico', position: [-102.55, 23.63], flag: 'flags/mexico.png' },
            { name: 'New Zealand', position: [174.89, -40.9], flag: 'flags/new zealand.png' },
        ];
    }

    getAllCountries() {
        return this.countries;
    }
}