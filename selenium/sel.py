from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
#driver = webdriver.Firefox('/Users/bhuff/dev/bryan-university/afs215/drivers/geckodriver')
driver = webdriver.Chrome("C:\\Users\\bhuff\\dev\\bryan-university\\afs215\\drivers\\chromedriver.exe")
driver.implicitly_wait(40)
driver.set_page_load_timeout(50)
driver.get("https://google.com")