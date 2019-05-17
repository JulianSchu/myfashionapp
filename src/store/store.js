import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cities: [{
                name: "London",
                value: "london",
                url: "../assets/London.jpg"
            },
            {
                name: "New York",
                value: "new-york",
                url: "../assets/New_York.jpg"
            },
            {
                name: "Los Angeles",
                value: "los-angeles",
                url: "../assets/Los_Angeles.jpg"
            },
            {
                name: "Miami",
                value: "miami",
                url: "../assets/Miami.jpg"
            }
        ],
        chosenCity: {
            name: '',
            value: ''
        },
        chosenType: {
            name: '',
            value: ''
        },

        event_types: [],
        headliners: [],
        events: [],
        chosenEvent: {},
        sector_types: [],
        event_eligibility_types: [],
        
        filteredEvents: [],

        selectedType: {},
        selectedSector: {},
        selectedEli: {},

        searchStr: '',

        addressExtention: ''
    },
    mutations: {
        loadEvents: (state, data) => {
            state.event_types = data.lookups.event_types;
            state.sector_types = data.lookups.sector_types;
            state.event_eligibility_types = data.lookups.event_eligibility_types;
            data.values.headliners.forEach(each => {
                if (data.values.headliners.indexOf(each) === 0) {
                    each.carousel_class = "carousel-item active";
                } else {
                    each.carousel_class = "carousel-item";
                }
            });
            state.headliners = data.values.headliners;
        },
        loadTypeEvents: (state, data) => {
            state.events = data.values.events;
        },
        loadFilteredEvents: (state, data) => {
            state.filteredEvents = data.values.events;   
        },
        setCity(state, payload) {
            state.chosenCity.value = payload.value;
            state.chosenCity.name = payload.name;
        },
        setType(state, payload) {
            state.chosenType.value = payload.value;
            state.chosenType.name = payload.name;
        },
        setEvent(state, payload) {
            state.chosenEvent = payload;
            let extentionText = payload.address_business_name.replace('&', 'and');
            state.addressExtention = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCjklE1pXhj1neQIzjSX-qzTf7iB_JoiFk&q=' + extentionText.split(' ').join('+') + ',' + payload.address_city;
        },
        onFilter(state, payload) {
            state.selectedType = payload.selectedType;
            state.selectedSector = payload.selectedSector;
            state.selectedEli = payload.selectedEli;
        },
        setSearchStr(state, payload) {
            state.searchStr = payload
        }
    },
    actions: {
        fetchData(context, payload) {
            context.commit('setCity', payload);
            let url = "https://chicmi.p.rapidapi.com/calendar_in_city/?days=30&max_results=0" + "&city=" + context.state.chosenCity.value;
            fetch(
                    //"https://newsapi.org/v2/everything?q=fashion&language=en&from=2019-05-01&apiKey=2c667d483092480ea9bc07666473f47a"
                    url, {
                        headers: {
                            "X-RapidAPI-Host": "chicmi.p.rapidapi.com",
                            "X-RapidAPI-Key": "69f6e2d4e8mshb890a3d98c0a4efp119267jsna32dc2df9119"
                        }
                    }
                )
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    context.commit('loadEvents', data)
                })
                .catch(err => console.log(err))
        },
        getTypeEvents(context, payload) {
            context.commit('setType', payload);
            let url = "https://chicmi.p.rapidapi.com/calendar_in_city/?days=30" + "&types=" +
                context.state.chosenType.value + "&max_results=0" + "&city=" + context.state.chosenCity.value;
            fetch(url, {
                    headers: {
                        "X-RapidAPI-Host": "chicmi.p.rapidapi.com",
                        "X-RapidAPI-Key": "69f6e2d4e8mshb890a3d98c0a4efp119267jsna32dc2df9119"
                    }
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    context.commit('loadTypeEvents', data)
                })
                .catch(err => console.log(err))
        },
        setEvent(context, payload) {
            context.commit('setEvent', payload)
        },
        onFilter(context, payload) {
            context.commit('onFilter', payload);
            let url = "https://chicmi.p.rapidapi.com/calendar_in_city/?days=30" +
                "&types=" + context.state.selectedType.value + 
                "&sectors=" + context.state.selectedSector.value +
                "&eligibility=" + context.state.selectedEli.value +  
                "&max_results=0" + 
                "&city=" + context.state.chosenCity.value;
            fetch(url, {
                    headers: {
                        "X-RapidAPI-Host": "chicmi.p.rapidapi.com",
                        "X-RapidAPI-Key": "69f6e2d4e8mshb890a3d98c0a4efp119267jsna32dc2df9119"
                    }
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    context.commit('loadFilteredEvents', data)
                })
                .catch(err => console.log(err))
        },
        getSearchStr(context, payload) {
            context.commit('setSearchStr', payload)
        }
    },
    getters: {
        searchedResults (state) {
            return payload
        }
    }
})