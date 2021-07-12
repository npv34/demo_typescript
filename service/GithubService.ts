import fetch from 'node-fetch';

export class GithubService {
    async getAll() {
        let res = await fetch('https://api.github.com/users',
            {
                method: 'GET'
            });
        return res.json();
    }
}
