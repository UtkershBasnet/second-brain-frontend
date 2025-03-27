import { createContext, useState } from "react";

export const ContentContext = createContext(null);

export function ContentProvider({ children }) {
    const [contents, setContents] = useState([]);

    return (
        <ContentContext.Provider value={{ contents, setContents }}>
            {children}
        </ContentContext.Provider>
    );
}
