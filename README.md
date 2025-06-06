# 🖥️ Intex-App Backend

**Intex-App backend** — bu Intex-App veb-sayti uchun yozilgan server qismi bo‘lib, foydalanuvchi autentifikatsiyasi, ma’lumotlarni boshqarish va biznes logikasini amalga oshiradi. Backend RESTful API tarzida tuzilgan va xavfsiz JWT tokenlar orqali autentifikatsiyani ta’minlaydi.

---

## 📋 Backend haqida

Backend quyidagi funksiyalarni bajaradi:

- Foydalanuvchilarni ro‘yxatdan o‘tkazish va tizimga kirish
- Ma’lumotlarni yaratish, o‘qish, yangilash va o‘chirish (CRUD)
- Ma’lumotlarni validatsiya qilish va xatoliklarni boshqarish
- Parollarni xavfsiz saqlash (bcrypt yordamida)
- JWT orqali autentifikatsiya va avtorizatsiya

---

## 🛠 Texnologiyalar

- **Node.js** — server platformasi
- **Express.js** — web framework
- **MongoDB** / **PostgreSQL** / **MySQL** (o‘zingiz ishlatganini yozing)
- **Mongoose** / **Sequelize** / **Prisma** (agar ishlatilgan bo‘lsa)
- **JWT** — JSON Web Token autentifikatsiyasi
- **bcrypt** — parollarni xesh qilish
- **dotenv** — muhit o‘zgaruvchilarini boshqarish

---

## ⚙️ Ishga tushirish (local)

### 1. Repozitoriyani klonlash:

```bash
git clone https://github.com/username/intex-app-backend.git
cd intex-app-backend
