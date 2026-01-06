import { toast } from "react-toastify";

const getStoredReadList = () => {
  const storedListStr = localStorage.getItem("read-List");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    //already exists. do not add it
    console.log(id, "already exists in the read list");
  } else {
    //add to the read list
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-List", storedListStr);
    toast("This book is added  to your read list.");
  }
};

const getAddToWishList = () => {
  const storedListStr = localStorage.getItem("wish-List");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToWishList = (id) => {
  const storedList = getAddToWishList();
  if (storedList.includes(id)) {
    //already exists. do not add it
    console.log(id, "already exists in the wish list");
  } else {
    //add to the wish list
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("wish-List", storedListStr);
  }
};

export {
  addToStoredReadList,
  addToWishList,
  getStoredReadList,
  getAddToWishList,
};
