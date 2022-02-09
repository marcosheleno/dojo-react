import { useSelector } from "react-redux";
import { TPageState } from "../../../store/contacts/pageReducer";

const id = useSelector((state:TPageState) => {
    state.id;
})

const getId = (id:number) => {

}