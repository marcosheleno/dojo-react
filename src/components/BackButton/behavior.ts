import { updatePage } from "../../store/contacts/pageActions";
import store from "../../store/store";

export const useBackButton = () => {
    store.dispatch(updatePage(0));

}