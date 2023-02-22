const { createApp } = Vue;

createApp({
    data() {
        return {
            toDoes: []
        };
    },
    methods: {

    },
    created() {
        axios
            .get('http://localhost:8888/esercizi/php-todo-list-json/api.php')
            .then((response) => {
                console.log(response);
                this.toDoes = response.data.toDoes;
            });
    }
}).mount('#app');