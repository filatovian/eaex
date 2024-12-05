async function getAccessToken() {
    try {
        // Asynchronous operations go here
        const token = await fetchAccessTokenFromServer();
        return token;  // This will be wrapped in a resolved promise
    } catch (error) {
        console.error('Failed to retrieve access token:', error);
        throw error;  // This will be wrapped in a rejected promise
    }
}
