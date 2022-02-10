import { updatePage } from "../../../store/contacts/pageActions";
import store from "../../../store/store";

export const getId = (id: number) => {
    store.dispatch(updatePage(id));    
}