/**
 * Created by cyclops on 9/19/14.
 */
var url = 'http://162.13.57.129/dashboardapi/no_expenses.aspx';

var webdriver = require('selenium-webdriver');
var btn_id = 'ContentPlaceHolder1_btn_generate_delivery_note';
//var assert = require('assert');

console.log('DELIVERY_NOTE_OUTPUT:');

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
driver.manage().timeouts().implicitlyWait(4000);
driver.manage().window().maximize();

driver.get(url);

driver.findElement(webdriver.By.id(btn_id)).click();

driver.wait(function(){
    driver.findElement(webdriver.By.id('ContentPlaceHolder1_Label4')).getText().then(function(result){
        console.log(result);
        return true;
    });
    return true;
},60000);

driver.quit();