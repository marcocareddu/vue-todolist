console.log('Vue OK', Vue);

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            newTask: '',
            list: [
                { id: 1, done: false, text: `Tagliare il prato` },
                { id: 2, done: false, text: `Dare l'acqua alle piante` },
                { id: 3, done: false, text: `Potare le siepi` },
                { id: 4, done: false, text: `Rimuovere le foglie secche` },
                { id: 5, done: false, text: `Aprire l'ombrellone` },
                { id: 6, done: false, text: `Portare fuori il verde` },
                { id: 7, done: false, text: `Montare l'ombreggiante` },
            ]
        }
    },
    computed: {
        // Create new ID 
        createId() {
            tempId = 0;
            this.list.forEach(element => {
                if (element.id >= tempId) {
                    tempId = ++element.id;
                }
            });
            return tempId;
        }
    },


    methods: {
        // Remove item from list and same listfiltered replaced
        removeItem(currentId) {
            this.list = this.list.filter((singleTask) => currentId !== singleTask.id);
        },

        // Create single task and push to list
        addTask(userInput) {
            const singleTask = { id: this.createId, done: false, text: userInput };
            this.list.push(singleTask);
            this.newTask = '';
        },
    }
});

// mount
app.mount('#root');