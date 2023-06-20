<!-- Esercizio di oggi: Vue To Do List
nome repo: vue-todolist
Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da almeno due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
SUPERBONUS
Inseriamo un filtro per cercare all'interno dei task -->


# TODO LIST VUE
## Fase 1 - Preliminare
- [x] Creare un markup HTML della lista.
- [x] Creare un array di oggetti `list` con `text`, `done` ed `id`.
- [x] Creare in data, una nuvoa voce `newTask` con valore stringa vuota.

## Fase 2 - Svolgimento
- [x] **PER OGNI** elemento all'interno di `list`:
    - [x] Renderizzare un `<li>` con all'interno `list.text`.
- [x] **V-IF** se `done` è true:
    - [x] Aggiungi la classe `line-through`.
- [x] Collegare la X di eliminazione allo stesso `id` dell'elemento.
- [x] Creare una funzione in methods chiamata `removeItem` che rimuove l'elemento id.
- [x] Collegare `removeItem` alla X di eliminazione.
- [ ] Creare una funzione `createTask` che genera un nuovo oggetto `task`.
- [ ] Collegare una casella di input con bottone, con `v-model` a `newTask`.
    - [ ] Collegare il bottone a `createTask`.
    - [ ] Collegare l'input a `createTask` tramite @keyup.enter.
- [ ] Collegare `<li>` al click ed aggiungere la classe `line-through`.