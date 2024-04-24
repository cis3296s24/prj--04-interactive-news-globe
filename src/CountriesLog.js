export default class CountriesLog {
    constructor() {
        this.countries = [
            { name: 'Australia', position: [149.1244, -35.3075], flag: 'flags/australia.png', code: 'au' },
            { name: 'Brazil', position: [-47.9297, -15.7801], flag: 'flags/brazil.png', code: 'br' },
            { name: 'Canada', position: [-75.6972, 45.4215], flag: 'flags/canada.png', code: 'ca' },
            { name: 'China', position: [116.4074, 39.9042], flag: 'flags/china.png', code: 'cn' },
            { name: 'Germany', position: [13.4050, 52.5200], flag: 'flags/germany.png', code: 'de' },
            { name: 'India', position: [77.2090, 28.6139], flag: 'flags/india.png', code: 'in' },
            { name: 'Japan', position: [139.6917, 35.6895], flag: 'flags/japan.png', code: 'jp' },
            { name: 'Russia', position: [37.6173, 55.7558], flag: 'flags/russia.png', code: 'ru' },
            { name: 'United States', position: [-77.0369, 38.9072], flag: 'flags/united states.png', code: 'us' },
            { name: 'United Kingdom', position: [-3.44, 55.38], flag: 'flags/united kingdom.png', code: 'gb' },
            { name: 'South Africa', position: [22.9375, -30.5595], flag: 'flags/south africa.png', code: 'za' },
        ];
    }

    getAllCountries() {
        return this.countries;
    }
}
