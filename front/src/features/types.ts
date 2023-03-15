export interface User {
   id: string,
   name: string
}

export interface InitialState {
    users: User[],
    error: null | string,
    loading: boolean
 }