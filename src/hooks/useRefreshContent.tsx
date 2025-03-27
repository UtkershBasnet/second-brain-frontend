import axios from "axios";
import { BACKEND_URL } from "../config";
import { useContent } from "./useContent";

export function useRefreshContent() {
    const { setContents } = useContent();

    function refresh() {
        axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: { "Authorization": localStorage.getItem("token") }
        }).then((response) => {
            setContents(response.data.content);
        });
    }

    return refresh;
}
