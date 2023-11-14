export const getParams = (param_string: string) => {
    const params = param_string.split('?&?')
    return params
}