const addBookmark = (id) => {
    let bookmarks = getBookmark();

    const storedBookmarks = localStorage.getItem('bookmarks');

    if (storedBookmarks) {
        bookmarks = JSON.parse(storedBookmarks);
    }

    const quantity = bookmarks[id];
    if (!quantity) {
        bookmarks[id] = 1;
    }
    // else {
    //     const newQuantity = quantity + 1;
    //     bookmarks[id] = newQuantity;
    // }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

const getBookmark = () => {
    let bookmarks = {};

    const storedBookmarks = localStorage.getItem('bookmarks');

    if (storedBookmarks) {
        bookmarks = JSON.parse(storedBookmarks);
    }

    return bookmarks;
}


const getStoredBookmarks = () => {

    let bookmarks = getBookmark();

    const storedBookmarks = localStorage.getItem('bookmarks');

    if (storedBookmarks) {
        bookmarks = JSON.parse(storedBookmarks);
    }

    return bookmarks;
}


// const addTime = (id) => {
//     let totalTime = getTime();

//     const storedTime = localStorage.getItem('time');

//     if (storedTime) {
//         totalTime = JSON.parse(storedTime);
//     }

//     const quantity = totalTime[id];
//     if (!quantity) {
//         totalTime[id] = 1;
//     }
//     // else {
//     //     const newQuantity = quantity + 1;
//     //     bookmarks[id] = newQuantity;
//     // }

//     localStorage.setItem('time', JSON.stringify(totalTime));
// }

// const getTime = () => {
//     let totalTime = {};

//     const storedTime = localStorage.getItem('time');

//     if (storedTime) {
//         totalTime = JSON.parse(storedTime);
//     }

//     return totalTime;
// }

// const getStoredTime = () => {

//     let totalTime = getTime();

//     const storedTime = localStorage.getItem('time');

//     if (storedTime) {
//         totalTime = JSON.parse(storedTime);
//     }

//     return totalTime;
// }


export {
    addBookmark,
    getBookmark,
    getStoredBookmarks
}