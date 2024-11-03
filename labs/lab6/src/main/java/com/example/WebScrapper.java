package com.example;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class WebScrapper {
    public static void main(String[] args) {
        // Specify the exact version of ChromeDriver to match the installed Chrome version
        WebDriverManager.chromedriver().driverVersion("130.0.6723.92").setup();
        WebDriver driver = new ChromeDriver();

        try {
            // Open the Government of Canada weather page
            driver.get("https://weather.gc.ca/canada_e.html");

            // Extract temperatures for specific cities
            String[] cities = {"Calgary", "Halifax", "Montreal", "Toronto", "Vancouver"};
            StringBuilder weatherData = new StringBuilder();

            for (String city : cities) {
                try {
                    WebElement tempElement = driver.findElement(By.xpath("//a[contains(text(), '" + city + "')]/../following-sibling::td"));
                    String temperature = tempElement.getText();
                    weatherData.append("City: ").append(city).append(" Temperature: ").append(temperature).append("\n");
                    System.out.println("City: " + city + " Temperature: " + temperature);
                } catch (Exception e) {
                    System.out.println("Error finding temperature for " + city);
                }
            }

            // Save weather data to a text file
            try (BufferedWriter writer = new BufferedWriter(new FileWriter("Weather.txt"))) {
                writer.write(weatherData.toString());
                System.out.println("Weather data saved to Weather.txt");
            } catch (IOException e) {
                System.out.println("Error writing to file: " + e.getMessage());
            }
        } finally {
            // Close the browser
            driver.quit();
        }
    }
}
