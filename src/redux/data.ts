const title = "Fetch or HTTPRequest"
const description = "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
const link = 'https://i.insider.com/5df7b8a679d75701fb6bb3a5?width=900&format=jpeg&auto=webp'

const initialState = {
    data:[    {title:title,
        id:11,
        author:'alex',
        date: '20.09.2019',
        description:description},
        {title:'Code ore Die',
            id:12,
            author:'dima',
            date: '04.07.2018',
            description:description},
        {title:'Omae wa mou shindeiru',
            id:13,
            author:'lyla',
            date: '08.08.2011',
            description:description}],
    comments:[
            {commentId:1,
            articleId:13,
            author:'lyla',
            photo: link,
            date: '08.08.2011',
            description:description},
             {commentId:2,
            articleId:13,
            author:'commander',
            photo: link,
            date: '20.03.2012',
            description:description},]

}
export default initialState