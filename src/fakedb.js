// use local storage to manage cart data
const addToDb = (id, name) => {
    let jobCart = getjobCart();
    // add quantity
    const storJobCart = jobCart[id];
    if (!storJobCart) {
        jobCart[id] = name;
    }
    localStorage.setItem('job-cart', JSON.stringify(jobCart));
}

const removeFromDb = id => {
    const jobCart = getjobCart();
    if (id in jobCart) {
        delete jobCart[id];
        localStorage.setItem('job-cart', JSON.stringify(jobCart));
    }
}

const getjobCart = () => {
    let jobCart = {};
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('job-cart');
    if (storedCart) {
        jobCart = JSON.parse(storedCart);
    }
    return jobCart;
}

const deleteJobCart = () => {
    localStorage.removeItem('job-cart');
}

export {
    addToDb,
    removeFromDb,
    getjobCart,
    deleteJobCart
}
