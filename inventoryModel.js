const db = require('../config/db');

class Inventory {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM inventory');
        return rows;
    }

    static async getById(id) {
        const [rows] = await db.query('SELECT * FROM inventory WHERE id = ?', [id]);
        return rows[0];
    }

    static async create(item) {
        const [result] = await db.query('INSERT INTO inventory (kode_alat, cabang, unit, fasilitas, nama_peralatan, bulan, tahun, tanggal, jumlah_jam_terputus, availability, total_availability) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
                                        [item.kode_alat, item.cabang, item.unit, item.fasilitas, item.nama_peralatan, item.bulan, item.tahun, item.tanggal, item.jumlah_jam_terputus, item.availability, item.total_availability]);
        return result;
    }

    static async update(id, item) {
        const [result] = await db.query('UPDATE inventory SET kode_alat = ?, cabang = ?, unit = ?, fasilitas = ?, nama_peralatan = ?, bulan = ?, tahun = ?, tanggal = ?, jumlah_jam_terputus = ?, availability = ?, total_availability = ? WHERE id = ?', 
                                        [item.kode_alat, item.cabang, item.unit, item.fasilitas, item.nama_peralatan, item.bulan, item.tahun, item.tanggal, item.jumlah_jam_terputus, item.availability, item.total_availability, id]);
        return result;
    }

    static async delete(id) {
        const [result] = await db.query('DELETE FROM inventory WHERE id = ?', [id]);
        return result;
    }
}

module.exports = Inventory;