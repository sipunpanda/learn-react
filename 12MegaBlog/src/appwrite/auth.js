import conf from "../conf/conf";

import {Client, Account, Id} from 'appwrite'

export class AuthService {
    constructor() {
        this.client
            .setEndPoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
            this.account = new Account(this.client)
    }
}

const authService = new AuthService();


export default authService