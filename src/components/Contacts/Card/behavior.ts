import { useSelector } from "react-redux";
import { updatePage, UPDATE_PAGE } from "../../../store/contacts/pageActions";
import { TPageState } from "../../../store/contacts/pageReducer";
import { TReducers } from "../../../store/reducers";
import store from "../../../store/store";

// const id = useSelector((state: TReducers) => state.page.id)

export const getId = (id: number) => {
    const page = store.getState().page;

    store.dispatch(updatePage(id));

    console.log(page);
    
    
}