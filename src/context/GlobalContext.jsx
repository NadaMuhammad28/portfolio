import React, { useContext, useReducer, useState } from "react";
const GlobalContext = React.createContext();
import db from "../firebase";
import { reducer } from "../reducer/GlobalReducer";
import { collection, query, getDocs, orderBy } from "firebase/firestore";

export default function GlobalContextProvider({ children }) {
  const initialState = {
    projects: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [fieldState, setFieldState] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [isModalOpened, setIsModalOpend] = useState(false);
  const handleModal = () => {
    isModalOpened ? setIsModalOpend(false) : setIsModalOpend(true);
  };

  const fetchProjects = async () => {
    try {
      const q = query(collection(db, "projects"), orderBy("order", "asc"));
      const querySnapshot = await getDocs(q);
      const newData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          img: data.main_img,
          slug: data.slug,
          repo_url: data.repo_url,
          demo_url: data.demo_url,
          title: data.title,
        };
      });
      dispatch({ type: "FETCH_PROJECTS", payload: newData });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        ...state,
        fetchProjects,
        fieldState,
        setFieldState,
        isModalOpened,
        setIsModalOpend,
        handleModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
