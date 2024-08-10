const db = require('../config/db');

class beritaAcara {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM beritaacara');
        return rows;
    }

    static async getById(id) {
        const [rows] = await db.query('SELECT * FROM beritaacara WHERE id = ?', [id]);
        return rows[0];
    }

    static async create(item) {
        const [result] = await db.query('INSERT INTO beritaacara (No_berita, nama_berita, from_unit, to_unit, keterangan, gambar) VALUES (?, ?, ?, ?, ?, ?)', 
                                        [item.No_berita, item.nama_berita, item.from_unit, item.to_unit, item.keterangan, item.gambar]);
        return result;
    }

    static async update(id, item) {
        const [result] = await db.query('UPDATE beritaacara SET No_berita = ?, nama_berita = ?, from_unit = ?, to_unit = ?, keterangan = ?, gambar = ? WHERE id = ?', 
                                        [item.No_berita, item.nama_berita, item.from_unit, item.to_unit, item.keterangan, item.gambar, id]);
        return result;
    }

    static async delete(id) {
        const [result] = await db.query('DELETE FROM beritaacara WHERE id = ?', [id]);
        return result;
    }
}

module.exports = beritaAcara;