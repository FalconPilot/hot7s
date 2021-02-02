import responseHandlers from './back'

export * as front from './front'

export const handleResponses = () => responseHandlers.forEach(handler => handler())
