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
