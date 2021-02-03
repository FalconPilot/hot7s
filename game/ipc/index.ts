import responseHandlers from './back'

export const handleResponses = () => responseHandlers.forEach((handler) => handler())
