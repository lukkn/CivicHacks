#include <WiFi.h>
#include <HTTPClient.h>
#include <Wire.h>
#include <Adafruit_CCS811.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

// WiFi credentials
const char* ssid = "SSID";
const char* password = "PASSWORD";

// Server URL
const char* serverUrl = "http://sm.remusharris.com";

// Temp
const int temperatureC = 24;

// Device ID
const int device_ID = 1;

// User String
String user;

// Sensor and Display Pins
#define MOISTURE_SENSOR_PIN 36
#define I2C_SDA 21
#define I2C_SCL 22

// CCS811 Sensor and OLED Display
Adafruit_CCS811 ccs;
Adafruit_SSD1306 display(128, 64, &Wire, -1);

// HTTP
HTTPClient http;

void setup() {
    Serial.begin(115200);
    WiFi.begin(ssid, password);
    // Serial.print("Connecting to WiFi...");

    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        // Serial.print(".");
    }
    // Serial.println("\nConnected to WiFi!");

    // Get user's identity
    http.begin(serverUrl);
    http.addHeader("Content-Type", "application/json");
    while (http.POST("{\"request\":\"get_user_name\"}") != 200) {}
    user = http.getString();
    http.end();


    // Initialize I2C
    Wire.begin(I2C_SDA, I2C_SCL);

    // Initialize CCS811
    if (!ccs.begin(0x5B)) {
        // Serial.println("Failed to start CCS811 sensor!");
        while (1);
    }

    // Initialize OLED Display
    if (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
        // Serial.println("SSD1306 allocation failed");
        while (1);
    }
    display.clearDisplay();
    display.setTextSize(1);
    display.setTextColor(SSD1306_WHITE);
    display.setCursor(0, 0);
    display.println("Hello " + user);
    display.println("Thank You For Contri-\nbuting to Science\n");
    display.println("You Are Now\nBroadcasting Data");
    display.display();
    delay(6000);
}

void loop() {
    if (WiFi.status() == WL_CONNECTED) {
        http.begin(serverUrl);
        http.addHeader("Content-Type", "application/json");

        // Read moisture sensor
        int moisturePercent = analogRead(MOISTURE_SENSOR_PIN)/34;

        // Read CCS811 Sensor
        float co2 = 0, tvoc = 0;
        if (ccs.available()) {
            if (!ccs.readData()) {
                co2 = ccs.geteCO2();
                tvoc = ccs.getTVOC();
            }
        }

        // Create JSON payload
        String jsonPayload = "{";
        jsonPayload += "\"device_ID\": " + String(device_ID) + ", ";
        jsonPayload += "\"moisturePercent\": " + String(moisturePercent) + ", ";
        jsonPayload += "\"temperatureC\": " + String(temperatureC) + ", ";
        jsonPayload += "\"co2\": " + String(co2) + ", ";
        jsonPayload += "\"tvoc\": " + String(tvoc);
        jsonPayload += "}";

        // Serial.println("Sending data: " + jsonPayload);
        int httpResponseCode = http.POST(jsonPayload);

        if (httpResponseCode > 0) {
            // Serial.println("Server response: " + http.getString());
        } else {
            // Serial.println("Error sending request: " + String(httpResponseCode));
        }

        http.end();

        // Display sensor values
        display.clearDisplay();
        display.setTextSize(1);
        display.setTextColor(SSD1306_WHITE);
        display.setCursor(0, 0);
        display.println("Hello " + user);
        display.println("Thank You For Contri-\nbuting to Science\n");
        display.println("Soil Moisture: " + String(moisturePercent) + " %");
        display.println("Temperature: " + String(temperatureC) + " C");
        display.println("CO2: " + String(co2) + " ppm");
        display.println("TVOC: " + String(tvoc) + " ppb");
        display.display();
    } else {
        // Serial.println("WiFi not connected!");
    }

    delay(1000); // Wait 1 seconds
}