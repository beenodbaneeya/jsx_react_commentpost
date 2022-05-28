import axios from 'axios';

//const KEY ='AIzaSyALyZ3wzn5OWUWr_vCofDevhetHXuu4OR4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});


//axios use garna lai working folder ma runnig project lai stop garera
//npm install --save axios 
//mathi ko command hanna parxa
//ani install bhayesi feri npm start hanna parxa 

















//youtube ko api bata data fetch garna
// GET type request use garna parxa with some number of query string parameter
//euta chai 1...part ho jaha hamle snippet bhanra set garxam
//part le chai hamile k information tyo particular video bata lina khojeko tyo dinxa
//snippet bhaneko chai snippet summary of entire video
//snippet chai link, author, title, description etc ho
//2.. ako chai maxResults ho jasle number of results from search process
//3.. arko chai 'q' ho jasko fullform query ho jun chai actual search term ho
