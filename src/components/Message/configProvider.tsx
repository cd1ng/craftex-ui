import { PropsWithChildren, RefObject, createContext, useRef } from "react";
import { MessageProvider, MessageRef } from ".";

interface ConfigProviderProps {
    messageRef?: RefObject<MessageRef>
}

export const ConfigContext = createContext<ConfigProviderProps>({});

/**
 * 最外层组件，提供全局配置和 MessageRef
 * @param props 
 * @returns 
 */
export function ConfigProvider(props: PropsWithChildren) {

    const { children } = props;

    const messageRef = useRef<MessageRef>(null);

    return (
        <ConfigContext.Provider value={{ messageRef }}>
            <MessageProvider ref={messageRef}></MessageProvider>
            {children}
        </ConfigContext.Provider>
    );
}