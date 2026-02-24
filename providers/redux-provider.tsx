'use client';

import { makeStore } from "@/store/store";
import { PropsWithChildren, useRef } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const ReduxProvider = ({
    children,
}: PropsWithChildren) => {
    // Keep store stable across re-renders
    const storeRef = useRef<ReturnType<typeof makeStore> | null>(null);
    if (!storeRef.current) storeRef.current = makeStore();

    const persistorRef = useRef<ReturnType<typeof persistStore> | null>(null);
    if (!persistorRef.current) persistorRef.current = persistStore(storeRef.current);

    return (
        <Provider store={storeRef.current}>
            <PersistGate loading={null} persistor={persistorRef.current}>
                {children}
            </PersistGate>
        </Provider>
    );
}

export default ReduxProvider