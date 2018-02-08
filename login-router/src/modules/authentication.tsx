export function login(username: string, password: string): boolean {
    if (username.length > 3 && password.length > 3) {
        return true;
    }
    
    return false;
}