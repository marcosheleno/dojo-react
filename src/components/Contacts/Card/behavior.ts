import { updatePage } from "../../../store/contacts/pageActions";
import store from "../../../store/store";

// const id = useSelector((state: TReducers) => state.page.id)

export const getId = (id: number) => {
    store.dispatch(updatePage(id));    
}