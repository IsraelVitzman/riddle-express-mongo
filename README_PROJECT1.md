
# 🧠 Riddle Game Server – MongoDB Backend API

שרת מבוסס Express.js ומסד נתונים MongoDB לניהול משחק חידות (Riddle Game). כולל מסלולי API עבור חידות, שחקנים ותוצאות משחק.

---

## 📂 מבנה פרויקט

```
PROJECT1/
│
├── connectMongoDB/
│   ├── creatConnectMDB.js         # יצירת חיבור למסד נתונים MongoDB
│   └── creatConctMYSQL.js         # יצירת חיבור למסד נתונים SQL
│
├── controlessPlayer/
│   ├── add.js                     # הוספת שחקן חדש
│   
│
├── controlessResultGame/
│   ├── add.js                     # הוספת תוצאות משחק לשחקן
│   └── getAll.js                  # שליפת תוצאות הטובה של  השחקן
|   └── getOne.js                  # שליפת תוצאות הטובות של כל השחקנים
│
├── controlessRiddles/
│   ├── add.js                     # הוספת חידה חדשה
│   ├── dalete.js                  # מחיקת חידה לפי id
│   ├── read.js                    # שליפת כל החידות
│   └── update.js                  # עדכון חידה קיימת
│
├── router/
│   ├── routerPlayer.js            # ראוטינג לפעולות שחקן
│   ├── routerResultGame.js        # ראוטינג לתוצאות משחק
│   └── routerRiddles.js           # ראוטינג לחידות
│
├── .env                           # משתני סביבה (למשל URI למסד)
├── .gitignore                     # קבצים שיש להתעלם מהם בגיט
├── app.js                         # קובץ ראשי – הפעלת השרת
├── package.json                   # תלויות ותסריטים
└── package-lock.json              # ניהול גרסאות תלויות מדויק
```

---

## 🚀 תכונות

- 📚 **חידות** – שליפה, הוספה, מחיקה, עדכון.
- 👥 **שחקנים** – יצירת שחקנים חדשים ושליפת כל השחקנים.
- 🧾 **תוצאות משחק** – שמירה ושליפה של תוצאות לפי שחקן.
- ☁️ **חיבור MongoDB בענן** – שימוש ב־MongoDB Atlas.
- ⚙️ **API REST מלא** – עם Express Router.

---

## 🛠️ התקנת תלויות

```bash
npm install express mongodb dotenv
```

---

## ▶️ הרצת השרת

1. ודא שקובץ `.env` קיים עם משתנה:
```env
PORT=3000
```

2. הרץ את השרת:

```bash
node app.js
```

3. תראה הודעה:
```
The request arrived successfully
Server is listening ...
```

---

## 🔗 מסלולי API זמינים

### 🧩 חידות (Riddles)
- `GET /riddles/getAllRiddles`
- `POST /riddles/addRiddle`
- `PUT /riddles/updateRiddle/:id`
- `DELETE /riddles/deleteRiddle:id`

### 👤 שחקנים (Player)
- `GET /player/getAllNamePlayers`
- `POST /player/newPlayer`

### 🧾 תוצאות משחק (Result Game)
- `GET /resultGame/getAllDataPlayers`
- `POST /resultGame/dataPlayer`

---

## 📌 דוגמה לחידה במבנה JSON

```json
{
  "id": "1",
  "question": "מה תמיד מתקדם אך לעולם לא חוזר?",
  "answer": "זמן",
  "hint": "קשור לשעון..."
}
```

---

## ⚠️ הערות

- ודא שחיבור ה־MongoDB שלך פעיל (`MongoClient.connect`).
- ניתן להרחיב את הקוד לתמיכה ב־SUPABASE בעתיד.

---

## 🧑‍💻 קרדיט

פותח על ידי ישראל ויצמן 💻  
למטרות תרגול Node.js, Express, MongoDB, REST API.

