import { IpcCrashResponse, IpcResponse, IpcSuccessResponse, IpcWarningResponse } from '$game/types'

export const isIpcSuccess = <SuccessValue>(
  response: IpcResponse<SuccessValue>
): response is IpcSuccessResponse<SuccessValue> => response[0] == 'OK'

export const isIpcWarning = <SuccessValue>(
  response: IpcResponse<SuccessValue>
): response is IpcWarningResponse<SuccessValue> => response[0] == 'WARNING'

export const isIpcCrash = (response: IpcResponse<any>): response is IpcCrashResponse =>
  response[0] == 'CRASH'
