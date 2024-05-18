const db = require("../db")

class Profile {

    // get all profiles
    static async getAllProfiles() {
        const [rows] = await db.query('SELECT * FROM profile');
        return rows;
    };

    // get profile by id
    static async getProfileById(id) {
        const [rows] = await db.query('SELECT * FROM profile WHERE profile_id = ?', [id])
        return rows[0]
    };

    // create profile first_name VARCHAR(30), last_name VARCHAR(30), profile_pic VARCHAR(255), backup_email VARCHAR(255) UNIQUE, phone_number VARCHAR(20), customer_id
    static async createProfile(profile) {
        const [rows] = await db.query('INSERT INTO profile SET ?', [profile])
        return rows.insertId
    };

    // update profile
    static async updateProfile(id, profile) {
        const [rows] = await db.query('UPDATE profile SET ? WHERE profile_id = ?', [profile, id])
        return rows
    };

    // delete profile
    static async deleteProfile(id) {
        const [rows] = await db.query('DELETE FROM profile WHERE profile_id = ?', [id])
        return rows
    };
}

module.exports = Profile;