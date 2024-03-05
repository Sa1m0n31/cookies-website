import {useEffect} from "react";

const useActionOnEscapePress = (action: Function) => {
    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if(e.key === 'Escape') {
                action();
            }
        });
    }, [action]);
}

export default useActionOnEscapePress;
