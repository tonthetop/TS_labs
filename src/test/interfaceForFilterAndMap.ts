interface Array < T > {
    filter(
        callbackfn: (value: T, index: number, array: T[]) => any,
        thisArg ? : any
    ): T[]
    map < U > (
        callbackfn: (value: T, index: number, array: T[]) => U,
        thisArg ? : any
    ): U[]
}

const array=[1,2,3];
filter(array, (item) =>item>3)