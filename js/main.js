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
                    done: true
                },
                {
                    text: 'Portare il cane al parco',
                    done: false
                },
            ],
            textInput: '',
            createNewObj: class {
                constructor(text, done){
                    this.text = text;
                    this.done = done;
                }
            }
        }
    },
    methods: {
        // Funzione che elimina una determinata task cliccata
        deleteToDo: function(i){
            return this.toDoList.splice(i, 1);
        },
        addToDo: function(){
            const newToDo = new this.createNewObj(this.textInput, false);
            this.toDoList.push(newToDo);
            this.textInput = "";
        },
        checkUncheck: function(i){
            if(this.toDoList[i].done){
                this.toDoList[i].done = false;
            } else {
            this.toDoList[i].done = true;
            }
        }
    },
}).mount('#app')