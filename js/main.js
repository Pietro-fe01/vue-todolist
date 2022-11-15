const { createApp } = Vue

createApp({
    data() {
        return {
            toDoList: [
                {
                    text: 'Fare i compiti',
                    done: true
                },
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Portare il cane al parco',
                    done: false
                },
            ]
        }
    },
    methods: {
        // Funzione che elimina una determinata task cliccata
        deleteToDo: function(i){
            this.toDoList.splice(i, 1)
        }
    },
}).mount('#app')
