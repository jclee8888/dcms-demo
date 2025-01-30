# **dotCMS Blog Demo** 📝

## **Overview**
This project is a blog feature integratoin using the **dotCMS GraphQL API**. It fetches and displays blog posts dynamically from the **dotCMS demo environment**, showcasing how a frontend engineer can work with dotCMS as a headless CMS.

The purpose of this project is to:
- Demonstrate API integration with **dotCMS GraphQL**.
- Display blog listings dynamically.
- Showcase **Eleventy / JavaScript / GraphQL handling API data.

---

## **Live Demo**
🔗 **[Live Site](https://dcms-demo.pages.dev/blog)**  
📂 **[GitHub Repo](https://github.com/jclee8888/dcms-demo)**  

---

## **Features**
✔️ Fetches blogs dynamically from dotCMS using GraphQL
✔️ Displays blog titles, authors, publish date, tags, and images  
✔️ Handles missing images gracefully
✔️ Uses environment variables for secure API authentication  

---

## **Tech Stack**
- **Frontend:** `11ty` / `Nunjucks` 
- **Styling:** `CSS`  
- **Data Fetching:** `GraphQL API`  
- **Hosting:** `Cloudflare Pages`

---

## **Installation & Setup**
### **1. Clone the Repository**
```sh
git clone https://github.com/jclee8888/dcms-demo.git
cd dcms-demo
```

### **2. Install Dependencies**
```sh
npm install
```

### **3. Setup Environment Variables**
create a .env file in root directory and add
DOTCMS_USERNAME
DOTCMS_PASSWORD

### **4. Run Server**
```sh
npm start
```

