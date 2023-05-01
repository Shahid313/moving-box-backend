var database_sql = "CREATE DATABASE IF NOT EXISTS moving_box";
var user_table_sql = "CREATE TABLE IF NOT EXISTS users (user_id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255), email VARCHAR(255),password VARCHAR(255),is_admin INT)";
var company_table_sql = "CREATE TABLE IF NOT EXISTS company (company_id INT AUTO_INCREMENT PRIMARY KEY,company_name VARCHAR(255), address VARCHAR(255),city VARCHAR(255),postal_code VARCHAR(255),vat_number VARCHAR(255),nation VARCHAR(255))";
var invoices_table_sql = "CREATE TABLE IF NOT EXISTS invoices (invoice_id INT AUTO_INCREMENT PRIMARY KEY,date VARCHAR(255), invoice_number VARCHAR(255),amount VARCHAR(255),download VARCHAR(255),company_id INT(100))";
var maintenance_history_table_sql = "CREATE TABLE IF NOT EXISTS maintenance_history (history_id INT AUTO_INCREMENT PRIMARY KEY,date VARCHAR(255), maintainer VARCHAR(255),matricola VARCHAR(255),modello VARCHAR(255),ubicazione VARCHAR(255),intervento VARCHAR(255),outcome VARCHAR(255),download VARCHAR(255),company_id INT(100))";
var tokens_table_sql = "CREATE TABLE IF NOT EXISTS tokens (token_id INT AUTO_INCREMENT PRIMARY KEY,quantity VARCHAR(255), price VARCHAR(255))";
var filter_user_by_email = (email)=>"SELECT * FROM users WHERE email='"+email+"'";
var insert_user = (name,email,password)=>`INSERT INTO users (name,email,password,is_admin) VALUES('${name}','${email}','${password}',0)`;
var create_admin =(email,password,name)=> `INSERT INTO users(email,password,name,is_admin) VALUES('${email}','${password}','${name}',1)`;
var filter_admin = "SELECT * FROM users WHERE is_admin =1";
var insert_company = (company_name,address,city,postal_code,vat_number,nation)=>`INSERT INTO company (company_name,address,city,postal_code,vat_number,nation) VALUES('${company_name}','${address}','${city}','${postal_code}','${vat_number}','${nation}')`;
var insert_invoice = (date,invoice_number,amount,download, company_id)=>`INSERT INTO invoices (date,invoice_number,amount,download,company_id) VALUES('${date}','${invoice_number}','${amount}','${download}', '${company_id}')`;
var insert_mHistory = (date,maintainer,matricola,modello,ubicazione,intervento,outcome,download,company_id)=>`INSERT INTO maintenance_history (date,maintainer,matricola,modello,ubicazione,intervento,outcome,download,company_id) VALUES('${date}','${maintainer}','${matricola}','${modello}','${ubicazione}','${intervento}','${outcome}','${download}', '${company_id}')`;
var insert_token = (quantity,price)=>`INSERT INTO tokens (quantity,price) VALUES('${quantity}','${price}')`;
var query_company = "SELECT * FROM company";
var query_invoice = "SELECT * FROM invoices LEFT JOIN company ON invoices.company_id = company.company_id";
var query_maintenance_history = "SELECT * FROM maintenance_history LEFT JOIN company ON maintenance_history.company_id = company.company_id";
var query_tokens = "SELECT * FROM tokens";

module.exports = {
    database_sql,
    user_table_sql,
    company_table_sql,
    invoices_table_sql,
    maintenance_history_table_sql,
    tokens_table_sql,
    filter_user_by_email,
    insert_user,
    create_admin,
    filter_admin,
    insert_company,
    insert_invoice,
    insert_mHistory,
    insert_token,
    query_company,
    query_invoice,
    query_maintenance_history,
    query_tokens
}