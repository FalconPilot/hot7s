export const checkExhaustive = (param: never): never => {
  throw new Error('DANGER : This code should never be reached !')
}
