const { createApp } = Vue;

createApp({
    data() {
        return {
            readUrl: 'http://localhost:8888/esercizi/php-todo-list-json/api.php',
            toDos: [],
            newToDo: {
                text: '',
                done: false
            },
        }
    },
    methods: {
        toggleDone(toDo) {
            toDo.done = !toDo.done;
        },
        addToDo() {
            console.log('Chiamato addToDo', this.newToDo);

            axios
                .post('./create.php', {
                    toDo: this.newToDo
                }, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((response) => {
                    console.log('ecco response:', response);

                    this.toDos.push({
                        text: this.newToDo.text,
                        done: this.newToDo.done
                    });

                    this.newToDo.text = '';
                });
        }
    },
    created() {
        axios
            .get(this.readUrl)
            .then((response) => {
                console.log(response);
                this.toDos = response.data;
            });
    }
}).mount('#app');