export interface position {
    name: string,
    color: string,
    id: number
}
export interface employees {
    firstName: string,
    lastName: string,
    image: string,
    id: number
}
export interface items {
    id: number,
    position: position,
    startsAt: Date,
    endsAt: Date
}
export interface pagination {
    offset?: number,
    limit?: number,
    count?: number
}
export interface events {
    items: Array<items> | [],
    pagination: pagination
}
export interface participants {
    id: number,
    startsAt: Date,
    endsAt: Date,
    position: position,
    employees: Array<employees> | []
}
export interface RootState {
    events: events,
    participants: participants
}