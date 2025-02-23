import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdownContent = `
**Help Wanted: Join Our Soil & Air Quality Research Team!**

**Posted by:** Dr. Jane Reynolds, Environmental Science Institute  
**Location:** Central Park, NYC | Redwood Forest, CA  
**Estimated Time Required:** 2 Days  
**Minion Level Required:** Beginner+  

### **We Need Your Help!**
We're on a mission to study how soil conditions impact air quality, and we need passionate volunteers to gather real-world data. If you love science, the environment, or just getting your hands a little dirty for a good cause, this is for you! This is your chance to directly contribute to real scientific research that can make a difference.

### **What You’ll Do**
1. **Get Your Hands on a ScienceMinions Sensor Kit** – If you’ve completed two beginner-level research tasks, you qualify to rent one of our sensor kits from your local library or rental hub.
2. **Head to the Research Site** – You’ll travel to one of our designated locations, either Central Park in New York City or the Redwood Forest in California, to collect crucial data.
3. **Deploy the Sensor** – Set up the device securely in the soil. The IoT-enabled sensor will automatically stream real-time data to the ScienceMinions platform.
4. **Snap Some Photos** – We need clear images of the sampling site, soil conditions, nearby vegetation, and any noticeable environmental factors (like industrial sites, traffic, or weather conditions).
5. **Share Your Observations** – Take note of anything interesting! Are there visible pollution sources? Unusual plant growth? Anything that stands out could be important.

### **Why This Matters**
We’re building a global dataset to understand how soil conditions interact with air pollutants like VOCs and CO2. Your work will help scientists identify trends, assess environmental risks, and push for smarter urban planning. Your effort could help shape policies for cleaner air and healthier soils!

### **What We Provide**
- A **ScienceMinions Sensor Kit** (measures soil pH, moisture, temperature, VOC levels, and CO2 concentration)
- A **Digital Logging Interface** (automatically streams data in real-time)
- A **Field Guide** with expert tips on best data collection practices

### **What We Need From You**
✅ Have at least two prior research tasks completed  
✅ Be able to travel to one of our assigned research sites  
✅ Deploy the sensor and let it gather data for 2 full days  
✅ Upload site photos and submit your notes within 48 hours  

### **What’s in It for You?**
🎖 Earn ScienceMinions XP and badges as you level up!  
📜 Receive a certificate of participation—perfect for resumes and college applications!  
🌎 Be part of a real scientific effort that has a meaningful environmental impact!  

**Are You In?** Click below to claim this research request and reserve your sensor kit!
`;

const ResearchTaskPage = () => {
    return (
        <div style={{ 
            maxWidth: "800px", 
            margin: "auto", 
            background: "white", 
            padding: "20px", 
            borderRadius: "10px", 
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            fontFamily: "Arial, sans-serif" 
        }}>
            <style>
                {`
                    body {
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 20px;
                    }
                    .badge {
                        display: inline-block;
                        background: #28a745;
                        color: white;
                        padding: 5px 10px;
                        border-radius: 5px;
                        font-size: 0.9em;
                    }
                    h1, h2, h3 {
                        color: #333;
                    }
                    .cta {
                        display: block;
                        text-align: center;
                        background: #007bff;
                        color: white;
                        padding: 15px;
                        text-decoration: none;
                        border-radius: 5px;
                        margin-top: 20px;
                        font-weight: bold;
                    }
                    .cta:hover {
                        background: #0056b3;
                    }
                    .info-box {
                        background: #e9ecef;
                        padding: 15px;
                        border-left: 5px solid #007bff;
                        margin: 20px 0;
                    }
                    ul {
                        padding-left: 20px;
                    }
                `}
            </style>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
                span: ({node, ...props}) => <span dangerouslySetInnerHTML={{ __html: props.children }} />
            }}>{markdownContent}</ReactMarkdown>
            <a href="#" className="cta">🚀 Claim This Request</a>
        </div>
    );
};

export default ResearchTaskPage;