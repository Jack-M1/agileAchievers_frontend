export enum UserRole {
    Admin = 1,
    HR = 2,
    Management = 3,
    Sales = 4
}

export type JwtToken = {
    Role: UserRole
}