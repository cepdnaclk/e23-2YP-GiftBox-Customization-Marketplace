-- 1. DATABASE INITIALIZATION
CREATE DATABASE IF NOT EXISTS nexus_db;
USE nexus_db;

-- 2. CORE USERS TABLE
-- Handles authentication for Admins, Customers, and Partners.
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL, 
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('ADMIN', 'CUSTOMER', 'PARTNER') DEFAULT 'CUSTOMER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. ROLE-SPECIFIC TABLES
CREATE TABLE admins (
    admin_id INT PRIMARY KEY,
    FOREIGN KEY (admin_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    address TEXT NULL,
    FOREIGN KEY (customer_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Partners table contains the 6-step onboarding data.
CREATE TABLE partners (
    partner_id INT PRIMARY KEY,
    shop_name VARCHAR(100) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    categories VARCHAR(255) NULL, -- From Onboarding Step 4
    shop_address TEXT NOT NULL,
    verification_id VARCHAR(50) NOT NULL, -- NIC or Business Registration
    status ENUM('PENDING', 'ACTIVE', 'REJECTED') DEFAULT 'PENDING',
    FOREIGN KEY (partner_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- 4. AUTOMATION TRIGGER
-- Ensures that every new user gets a matching entry in their respective role table.
DELIMITER $$
CREATE TRIGGER after_user_register
AFTER INSERT ON users
FOR EACH ROW
BEGIN
    IF NEW.role = 'CUSTOMER' THEN
        INSERT INTO customers (customer_id) VALUES (NEW.user_id);
    ELSEIF NEW.role = 'ADMIN' THEN
        INSERT INTO admins (admin_id) VALUES (NEW.user_id);
    ELSEIF NEW.role = 'PARTNER' THEN
        -- Initializes a placeholder; the Onboarding Form will UPDATE these fields.
        INSERT INTO partners (partner_id, shop_name, full_name, phone_number, shop_address, verification_id) 
        VALUES (NEW.user_id, 'New Shop', 'Full Name', '000', 'Address', '000');
    END IF;
END$$
DELIMITER ;

-- 5. SAMPLE DATA SEEDING
-- 5.1 Create Primary Admin
INSERT INTO users (username, email, password_hash, role) 
VALUES ('Admin', 'admin@giftassemble.com', '1234', 'ADMIN');

-- 5.2 Create 10 Partner User Accounts
INSERT INTO users (username, email, password_hash, role) VALUES 
('giftworld', 'amila@giftworld.lk', 'pass123', 'PARTNER'),
('luckygifts', 'kasun@lucky.com', 'pass123', 'PARTNER'),
('craftyhands', 'nuwan@crafty.lk', 'pass123', 'PARTNER'),
('bloombox', 'ishara@bloom.com', 'pass123', 'PARTNER'),
('sweetsurprise', 'ruwan@sweets.lk', 'pass123', 'PARTNER'),
('treasuretrove', 'sajith@treasure.lk', 'pass123', 'PARTNER'),
('elegantwraps', 'dilini@wraps.com', 'pass123', 'PARTNER'),
('artisanhub', 'malik@artisan.lk', 'pass123', 'PARTNER'),
('purepetals', 'kavindi@petals.lk', 'pass123', 'PARTNER'),
('rusticcharm', 'tharindu@rustic.com', 'pass123', 'PARTNER');

-- 5.3 Populate Partner Details (Matching the Merchant Onboarding flow)
-- Note: Partner IDs start from 2 (ID 1 is Admin). 
UPDATE partners SET shop_name='Gift World', full_name='Amila Perera', phone_number='0712345678', categories='Handmade, Corporate', shop_address='No. 45, Galle Road, Colombo 03', verification_id='BR-99210', status='PENDING' WHERE partner_id=2;
UPDATE partners SET shop_name='Lucky Gifts', full_name='Kasun Silva', phone_number='0771112222', categories='Toys, Kids', shop_address='No. 12, Main Street, Kandy', verification_id='BR-88452', status='ACTIVE' WHERE partner_id=3;
UPDATE partners SET shop_name='Crafty Hands', full_name='Nuwan Perera', phone_number='0753334444', categories='Woodwork, Decor', shop_address='Beach Road, Galle', verification_id='BR-77123', status='PENDING' WHERE partner_id=4;
UPDATE partners SET shop_name='Bloom Box', full_name='Ishara Dias', phone_number='0725556666', categories='Flowers, Plants', shop_address='Negombo Road, Kurunegala', verification_id='BR-66541', status='ACTIVE' WHERE partner_id=5;
UPDATE partners SET shop_name='Sweet Surprises', full_name='Ruwan Kumara', phone_number='0707778888', categories='Cakes, Sweets', shop_address='Main St, Matara', verification_id='BR-55982', status='PENDING' WHERE partner_id=6;
UPDATE partners SET shop_name='Treasure Trove', full_name='Sajith Premadasa', phone_number='0711119999', categories='Antiques, Jewelry', shop_address='Jaffna Town', verification_id='BR-44321', status='ACTIVE' WHERE partner_id=7;
UPDATE partners SET shop_name='Elegant Wraps', full_name='Dilini Fernando', phone_number='0770001111', categories='Stationery, Cards', shop_address='Peradeniya Rd, Kandy', verification_id='BR-33210', status='PENDING' WHERE partner_id=8;
UPDATE partners SET shop_name='Artisan Hub', full_name='Malik Samaraweera', phone_number='0782223333', categories='Pottery, Art', shop_address='Ratnapura City', verification_id='BR-22109', status='ACTIVE' WHERE partner_id=9;
UPDATE partners SET shop_name='Pure Petals', full_name='Kavindi Silva', phone_number='0764445555', categories='Fresh Flowers', shop_address='Gampaha Road', verification_id='BR-11098', status='PENDING' WHERE partner_id=10;
UPDATE partners SET shop_name='Rustic Charm', full_name='Tharindu Perera', phone_number='0746667777', categories='Home Decor', shop_address='Anuradhapura Town', verification_id='BR-00987', status='ACTIVE' WHERE partner_id=11;

-- 5.4 Create 20 Customer User Accounts
-- The Trigger will automatically create the corresponding row in the 'customers' table.
INSERT INTO users (username, email, password_hash, role) VALUES 
('dilshan_k', 'dilshan@gmail.com', 'pass123', 'CUSTOMER'),
('sanath_j', 'sanath@yahoo.com', 'pass123', 'CUSTOMER'),
('mahela_w', 'mahela@hotmail.com', 'pass123', 'CUSTOMER'),
('kumar_s', 'kumar@slt.lk', 'pass123', 'CUSTOMER'),
('lasith_m', 'malinga@york.com', 'pass123', 'CUSTOMER'),
('angelo_m', 'angelo@mathews.com', 'pass123', 'CUSTOMER'),
('dimuth_k', 'dimuth@cricket.lk', 'pass123', 'CUSTOMER'),
('wanindu_h', 'wanindu@rcb.com', 'pass123', 'CUSTOMER'),
('chamari_a', 'chamari@wcricket.com', 'pass123', 'CUSTOMER'),
('shashikala_s', 'shashi@blue.lk', 'pass123', 'CUSTOMER'),
('kusal_m', 'kusal@mendis.com', 'pass123', 'CUSTOMER'),
('dhananjaya_s', 'dds@silva.com', 'pass123', 'CUSTOMER'),
('pathum_n', 'pathum@opener.com', 'pass123', 'CUSTOMER'),
('charith_a', 'charith@middle.com', 'pass123', 'CUSTOMER'),
('dasun_s', 'dasun@captain.com', 'pass123', 'CUSTOMER'),
('bhanuka_r', 'bhanuka@power.com', 'pass123', 'CUSTOMER'),
('nuwan_t', 'nuwan@tushara.com', 'pass123', 'CUSTOMER'),
('dunith_w', 'dunith@young.com', 'pass123', 'CUSTOMER'),
('sadeera_s', 'sadeera@wk.com', 'pass123', 'CUSTOMER'),
('dilshani_w', 'dilshani@netball.lk', 'pass123', 'CUSTOMER');

-- 5.5 (Optional) Populate Customer Addresses
-- Assuming Admin was ID 1, Partners were ID 2-11, Customers will start at ID 12.
-- We update the 'customers' table to add addresses.
UPDATE customers SET address='123 Lotus Rd, Colombo' WHERE customer_id=12;
UPDATE customers SET address='45 Beach Side, Galle' WHERE customer_id=13;
UPDATE customers SET address='88 Hill Top, Kandy' WHERE customer_id=14;
UPDATE customers SET address='99 Main St, Jaffna' WHERE customer_id=15;
UPDATE customers SET address='No 5, Temple Rd, Matara' WHERE customer_id=16;
UPDATE customers SET address='Apt 4B, Havelock City' WHERE customer_id=17;
UPDATE customers SET address='77 Green Path, Negombo' WHERE customer_id=18;
UPDATE customers SET address='33 Lake View, Kurunegala' WHERE customer_id=19;
UPDATE customers SET address='12 Station Rd, Gampaha' WHERE customer_id=20;
UPDATE customers SET address='55 Old Road, Panadura' WHERE customer_id=21;
UPDATE customers SET address='66 New Town, Ratnapura' WHERE customer_id=22;
UPDATE customers SET address='22 Rice Field, Anuradhapura' WHERE customer_id=23;
UPDATE customers SET address='101 Cool Climate, Nuwara Eliya' WHERE customer_id=24;
UPDATE customers SET address='88 Dry Zone, Hambantota' WHERE customer_id=25;
UPDATE customers SET address='12 Coastal Line, Hikkaduwa' WHERE customer_id=26;
UPDATE customers SET address='44 City Center, Batticaloa' WHERE customer_id=27;
UPDATE customers SET address='90 Forest Edge, Sigiriya' WHERE customer_id=28;
UPDATE customers SET address='32 Fort, Trincomalee' WHERE customer_id=29;
UPDATE customers SET address='11 Rubber Estate, Kalutara' WHERE customer_id=30;
UPDATE customers SET address='78 Coconut Grove, Puttalam' WHERE customer_id=31;