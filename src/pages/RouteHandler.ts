import { useDispatch } from "react-redux";
import { updatePage } from "../store/contacts/pageActions";

export function useRouteHandler(page?: number) {
    const dispatch = useDispatch();

    if (!page) {
        page = 0;
    }

    dispatch(updatePage(page));
}
