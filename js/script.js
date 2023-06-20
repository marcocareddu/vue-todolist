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
    }
});

// mount
app.mount('#root');