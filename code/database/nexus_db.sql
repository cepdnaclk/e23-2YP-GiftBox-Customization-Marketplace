-- 1. Create and Use Database
CREATE DATABASE nexus_db;
USE nexus_db;

-- 2. Create Main Users Table
-- This stores the Login credentials for BOTH Admins and Customers
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL, 
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('ADMIN', 'CUSTOMER') DEFAULT 'CUSTOMER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Create Admin Table
CREATE TABLE admins (
    admin_id INT PRIMARY KEY,
    FOREIGN KEY (admin_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- 4. Create Customer Table
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    address TEXT NULL, -- Nullable because they add address later
    FOREIGN KEY (customer_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- 5. AUTOMATION (Trigger)
-- When a user registers as 'CUSTOMER', automatically create a row in 'customers' table
DELIMITER $$
CREATE TRIGGER after_user_register
AFTER INSERT ON users
FOR EACH ROW
BEGIN
    IF NEW.role = 'CUSTOMER' THEN
        INSERT INTO customers (customer_id) VALUES (NEW.user_id);
    END IF;
END$$
DELIMITER ;

-- Create the User account for Admin
INSERT INTO users (username, email, password_hash, role) 
VALUES ('Admin', 'admin@giftassemble.com', '1234', 'ADMIN');

