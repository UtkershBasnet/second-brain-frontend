import axios from "axios";
import { BACKEND_URL } from "../config";
import { useContent } from "./useContent";

export function useFilterContent(type: string) {
    const { setContents } = useContent();

    function filterItem() {
        axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: { "Authorization": localStorage.getItem("token") }
        }).then((response) => {
            type == "youtube" ? setContents(response.data.content.filter((e) => e.type === "youtube")) : setContents(response.data.content.filter((e) => e.type === "twitter"));
        });
    }

    return filterItem;
}
