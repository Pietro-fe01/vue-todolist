const { createApp } = Vue

createApp({
    data() {
        return {
            toDoList: [
                {
                    text: 'Fare i compiti',
                    done: false
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

    },
}).mount('#app')