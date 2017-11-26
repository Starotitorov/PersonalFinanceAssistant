import { alerts } from 'src/utils';

/**
 * Global exception handler.
 */
export default function JSExceptionHandler(error, isFatal) {
    if (!isFatal) {
        return;
    }

    alerts.showFatalErrorAlert();
}
