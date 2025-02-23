# **Science Minions**

## **Inspiration**
Science Minions was born from our desire to **bridge the gap between researchers and citizen scientists**. Inspired by the potential of crowdsourced data collection, we envisioned a platform where **anyone—students, enthusiasts, and volunteers—could contribute to real-world scientific research.**  

We asked ourselves:  
*"What if researchers could deploy an army of volunteers, each equipped with data collection tools, to gather insights from the world around them?"*  

Thus, **Science Minions** was created—a **collaborative platform** where researchers post tasks, and volunteers complete them using sensor devices that live-stream environmental data.

## **What It Does**
Science Minions is a **web-based platform** that connects researchers with volunteers ("minions") who can rent and deploy real-world sensors to collect valuable data and participate in scientific research.  

🔬 **Researchers post tasks** – Need temperature readings across a city? Want to measure air quality near schools? Science Minions makes it happen.  
📡 **Volunteers apply to help** – Libraries and community centers offer easy-to-use devices that aid some research tasks. Many research tasks require only a notebook and camera.
🌍 **Data is instantly available** – Researchers receive live sensor data via our platform, enabling faster insights and discovery.  

From environmental monitoring to urban research, **Science Minions empowers citizen scientists to contribute to meaningful research projects**.

## **How We Built It**
Science Minions consists of **three core components**:

### **🌐 The Web Platform (React & Node.js)**
- Built with **React** for a seamless user experience.  
- Backend powered by **Node.js and Express**, handling researcher tasks and volunteer coordination.  
- Uses **MongoDB** to store task details, user progress, and real-time sensor data.  

### **📡 The Hardware (Embedded System & Sensors)**
- Developed on an **(ESP32)** microcontroller, ensuring **WiFi-enabled real-time data streaming**.  
- Integrated **temperature, moisture, and air quality sensors** via **I2C and ADC channels**.  
- Communicates with the platform via a **custom REST API** for real-time updates.  

### **🔗 The Connection (Data Pipeline)**
- Sensor readings are **sent over WiFi** and stored in MongoDB via our **Node.js backend**.  
- Researchers can **visualize live data** using interactive dashboards.  

## **Challenges We Faced**
### **⚙️ Hardware Compatibility & Data Transmission**
- Initial integration with **Bluetooth sensors** led to **frequent interruptions**; switching to **WiFi-based ESP32** resolved this.  
- **Live data streaming** and graphing through **IoT devices** proved to be a challenge.
- Managing the **growing complexity** of our website's device rental and identification features.

## **Accomplishments We’re Proud Of**  
📡 **Seamless live-streaming from rented devices to the Science Minions dashboard.**  
🔬 **A working system that empowers real-world research and education through citizen science.**  
💡 **Overcame hardware, software, and networking challenges through teamwork and collaboration.**  

## **What We Learned**  
- **Deepened our expertise in React, Node.js, and MongoDB** for full-stack development.
- Gained hands-on experience in using **IoT devices** to transmit real-time data over the web.
- Improved our **teamwork and problem-solving skills** by collaborating under tight deadlines to overcome technical challenges.

## **What’s Next for Science Minions?**
🌍 **Wider Adoption** – Partnering with **libraries, schools, and research institutions** to grow our minion network.  
🏆 **Gamification & Rewards** – Encouraging volunteers with **badges, leaderboards, and incentives**.  
🔗 **More Sensor Types** – Expanding device capabilities to include **motion, pressure, and water quality sensors**.  
📊 **Advanced Data Analytics** – Giving researchers **AI-powered insights** from collected data.  

Science Minions is just the beginning—we’re **revolutionizing citizen science one mission at a time!**  
