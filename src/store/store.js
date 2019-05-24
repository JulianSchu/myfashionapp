import Vue from "vue";
import Vuex from "vuex";
import router from '../router'

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

        addressExtention: '',

        news: [],

        userEP: {
            userName: '',
            userEmail: '',
            userPassword: ''
        },
        currentUser: null,
        userName: '',
        email: '',
        uid: '',
        posts: null,

        favorites: null
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
        },
        setCurrentUser(state, payload) {
            state.currentUser = payload
        },
        getNews(state, data) {
            state.news = data.articles;
        },
        logIn(state, payload) {
            state.currentUser = payload.currentUser;
            state.userName = payload.userName;
            state.email = payload.email;
            state.uid = payload.uid;
        },
        getUserName(state, payload) {
            state.userEP.userName = payload;
        },
        getEmail(state, payload) {
            state.userEP.userEmail = payload
        },
        getPassword(state, payload) {
            state.userEP.userPassword = payload
        },
        getPosts(state, payload) {
            state.posts = payload;
        },
        getFavorites(state, payload) {
            state.favorites = payload;
        },
        signOut(state) {
            state.userEP.userName = '';
            state.userEP.userEmail = '';
            state.userEP.userPassword = '';

            state.currentUser = null;
            state.userName = '';
            state.email = '';
            state.uid = '';

            state.posts = null;
        }
    },
    actions: {
        fetchData(context, payload) {
            context.commit('setCity', payload);
            context.dispatch('getPosts');
            context.dispatch('getFavorites');

            let url = "https://chicmi.p.rapidapi.com/calendar_in_city/?days=30&max_results=0" + "&city=" + context.state.chosenCity.value;
            fetch(url, {
                    headers: {
                        "X-RapidAPI-Host": "chicmi.p.rapidapi.com",
                        "X-RapidAPI-Key": "69f6e2d4e8mshb890a3d98c0a4efp119267jsna32dc2df9119"
                    }
                })
                .then(res => res.json())
                .then(data => {
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
                    context.commit('loadFilteredEvents', data)
                })
                .catch(err => console.log(err))
        },
        getSearchStr(context, payload) {
            context.commit('setSearchStr', payload)
        },
        getNews(context) {
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;
            let url = "https://newsapi.org/v2/everything?q=fashion&language=en&from=" + today + "&apiKey=2c667d483092480ea9bc07666473f47a";
            fetch(url)
                .then(res => res.json()
                    .then(data => {
                        context.commit('getNews', data)
                    })
                    .catch(err => console.log(err)))
        },
        logIn(context) {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase
                .auth()
                .signInWithPopup(provider)
                .then(result => {
                    // The signed-in user info.
                    var token = result.credential.accessToken;

                    context.commit('logIn', {
                        currentUser: result.user,
                        userName: result.user.displayName,
                        email: result.user.email,
                        uid: result.user.uid
                    });
                    router.push('/cities')
                })
                .catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorCode, errorMessage);
                });
        },
        getUserName({
            commit
        }, payload) {
            commit('getUserName', payload)
        },
        getEmail({
            commit
        }, payload) {
            commit('getEmail', payload)
        },
        getPassword({
            commit
        }, payload) {
            commit('getPassword', payload)
        },
        signUpEP(context) {
            let email = context.state.userEP.userEmail.toString();
            let password = context.state.userEP.userPassword.toString();
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(result => {
                    context.commit('logIn', {
                        currentUser: result.user,
                        userName: context.state.userEP.userName,
                        email: result.user.email,
                        uid: result.user.uid
                    });
                    router.push('/cities')
                })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorCode + ':' + errorMessage)
                });
        },
        logInEP(context) {
            let email = context.state.userEP.userEmail.toString();
            let password = context.state.userEP.userPassword.toString();
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(result => {
                    context.commit('logIn', {
                        currentUser: result.user,
                        userName: context.state.userEP.userName,
                        email: result.user.email,
                        uid: result.user.uid
                    });
                    router.push('/cities')
                })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorCode, errorMessage)
                });
        },
        getPosts(context) {
            let city = context.state.chosenCity.name
            firebase
                .database()
                .ref(city + "/posts/")
                .on("value", function (result) {
                    let allPost = result.val();
                    context.commit('getPosts', allPost)
                });
        },
        getFavorites(context) {
            let city = context.state.chosenCity.name;
            let uid = context.state.uid;
            firebase
                .database()
                .ref(city + "/favorite/" + uid + "/")
                .on("value", function (result) {
                    let allFavorites = result.val();
                    context.commit('getFavorites', allFavorites)
                });
        },
        signOut(context) {
            firebase.auth().signOut().then(function () {
                context.commit('signOut')
                router.push('/');
            }).catch(function (error) {
                console.log(error.code, error.message)
            });
        }
    },
    getters: {
        searchedResults(state) {
            return payload
        }
    }
})