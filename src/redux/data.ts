const title = "The Fetch API"
const description = "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
const link = 'https://i.insider.com/5df7b8a679d75701fb6bb3a5?width=900&format=jpeg&auto=webp'

const initialState = {
    data:[    {title:title,
        id:11,
        author:'alex',
        date: '20.09.2019',
        description:'fetch allows you to make network requests similar to XMLHttpRequest (XHR). The main difference is that the Fetch API uses Promises, which enables a simpler and cleaner API, avoiding callback hell and having to remember the complex API of XMLHttpRequest. Let\'s start by comparing a simple example implemented with an XMLHttpRequest and then with fetch. We just want to request a URL, get a response and parse it as JSON.An XMLHttpRequest would need two listeners to be set to handle the success and error cases and a call to open() and send()'},
        {title:'Set',
            id:12,
            author:'dima',
            date: '04.07.2018',
            description:'A Set is a special type collection – “set of values” (without keys), where each value may occur only once.The main feature is that repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once.For example, we have visitors coming, and we’d like to remember everyone. But repeated visits should not lead to duplicates. A visitor must be “counted” only once.The alternative to Set could be an array of users, and the code to check for duplicates on every insertion using arr.find. But the performance would be much worse, because this method walks through the whole array checking every element. Set is much better optimized internally for uniqueness checks.'},
        {title:'Typescript & operator',
            id:13,
            author:'lyla',
            date: '08.08.2011',
            description:'Intersection types represent values that simultaneously have multiple types. A value of an intersection type A & B is a value that is both of type A and type B. Intersection types are written using intersection type literals'}],
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