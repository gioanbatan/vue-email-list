// Ciao ragazzi,
// Esercizio di oggi: Vue Email List
// nome repo: vue-email-list
// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.
// :avviso:  31 ottobre e 1 novembre ci saranno le vacanze. Riprenderemo le lezioni Mercoledì 2 novembre
// Buon lavoro e divertitevi! :tada: :party_blob:

const { createApp } = Vue;

createApp({
    data() {
        return {
            eMails: []
        }
    },
    created() {
        this.generateMail();
    },
    methods: {
        test() {
            this.console.log(message);
        },
        generateMail() {
            for (let i = 0; i < 10; i++) {
                axios
                    .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
                    .then((serverMsg) => {
                        this.eMails.push(serverMsg.data.response);
                });
            }
        }
    }
}).mount("#app");

