-- LIST DBs --
SHOW DATABASES;

-- CREATE DB --
CREATE DATABASE e_commerce_db;

-- DELETE DB --
DROP DATABASE e_commerce_db;

-- USE DB --
USE e_commerce_db;

-- SHOW TABLES --
SHOW TABLES;

-- CREATE TABLE(S) --
CREATE TABLE customer (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    username varchar(50),
    email varchar(100),
    `password` varchar(100),
    date_joined TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE supplier (
    supplier_id INT AUTO_INCREMENT PRIMARY KEY,
    supplier_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone_number VARCHAR(20),
    address VARCHAR(255),
    website VARCHAR(255)
);

CREATE TABLE profile (
    profile_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    profile_pic VARCHAR(255),
    backup_email VARCHAR(255) UNIQUE,
    phone_number VARCHAR(20),
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id) ON DELETE CASCADE
);

CREATE TABLE address (
    address_id INT PRIMARY KEY AUTO_INCREMENT,
    street VARCHAR(100),
    city VARCHAR(255),
    state VARCHAR(255),
    zip_code INT,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id) ON DELETE CASCADE
);

CREATE TABLE product (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    brand VARCHAR(100),
    description TEXT,
    price DECIMAL(5, 2) NOT NULL,
    quantity_available INT NOT NULL,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    supplier_id INT,
    FOREIGN KEY (supplier_id) REFERENCES supplier (supplier_id) ON DELETE CASCADE
);

CREATE TABLE `order` (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    quantity INT,
    payment_method VARCHAR(50),
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(5, 2) NOT NULL,
    status VARCHAR(50),
    product_id INT,
    customer_id INT,
    supplier_id INT,
    FOREIGN KEY (product_id) REFERENCES product(product_id) ON DELETE CASCADE,
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id) ON DELETE CASCADE,
    FOREIGN KEY (supplier_id) REFERENCES supplier(supplier_id) ON DELETE CASCADE
);

CREATE TABLE review (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    rating INT,
    review_text TEXT,
    review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    customer_id INT,
    product_id INT,
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES product(product_id) ON DELETE CASCADE
);

SHOW TABLES;

-- DESCRIBE TABLE(S) --
DESCRIBE customer;
DESCRIBE supplier;
DESCRIBE profile;
DESCRIBE address;
DESCRIBE product;
DESCRIBE `order`;
DESCRIBE review;

-- DELETE TABLE(S) --
DROP TABLE review;
DROP TABLE profile;
DROP TABLE address;
DROP TABLE product;
DROP TABLE `order`;
DROP TABLE customer;
DROP TABLE supplier;

-- INSERT DATA (CREATE/POST) --
INSERT INTO customer (username, email, password) VALUES
    ('user1', 'user1@google.com', 'password1'),
    ('user2', 'nick@yahoo.com', 'password2'),
    ('user3', 'user3@outlook.com', 'password3'),
    ('user4', 'user4@aol.com', 'password4'),
    ('user5', 'user5@example.com', 'password5')
;
SELECT * FROM customer; -- GET

INSERT INTO supplier (supplier_name, email, phone_number, address, website) VALUES
    ('Supplier 1', 'supplier1@example.com', '123-456-7890', '123 Supplier St', 'www.supplier1.com'),
    ('Supplier 2', 'supplier2@example.com', '987-654-3210', '456 Supplier Ave', 'www.supplier2.com'),
    ('Supplier 3', 'supplier3@example.com', '111-222-3333', '789 Supplier Blvd', 'www.supplier3.com'),
    ('Supplier 4', 'supplier4@example.com', '444-555-6666', '321 Supplier Rd', 'www.supplier4.com'),
    ('Supplier 5', 'supplier5@example.com', '777-888-9999', '654 Supplier Ln', 'www.supplier5.com')
;
SELECT * FROM supplier; -- GET

INSERT INTO profile (first_name, last_name, profile_pic, backup_email, phone_number, customer_id) VALUES
    ('John', 'Doe', 'john_doe.jpg', 'john.doe.backup@example.com', '123-456-7890', 1),
    ('Jane', 'Smith', 'jane_smith.jpg', 'jane.smith.backup@example.com', '987-654-3210', 2),
    ('Mike', 'Johnson', 'mike_johnson.jpg', 'mike.johnson.backup@example.com', '111-222-3333', 3),
    ('Emily', 'Brown', 'emily_brown.jpg', 'emily.brown.backup@example.com', '444-555-6666', 4),
    ('Alex', 'Wilson', 'alex_wilson.jpg', 'alex.wilson.backup@example.com', '777-888-9999', 5)
;
SELECT * FROM profile; -- GET

INSERT INTO address (street, city, state, zip_code, customer_id) VALUES
    ('123 Main St', 'Anytown', 'State A', 12345, 1),
    ('456 Elm St', 'Sometown', 'State B', 54321, 2),
    ('789 Oak Ave', 'Othertown', 'State C', 98765, 3),
    ('321 Pine Rd', 'Smalltown', 'State D', 45678, 4),
    ('654 Maple Ln', 'Newtown', 'State E', 87654, 5)
;
SELECT * FROM address; -- GET

INSERT INTO product (name, brand, description, price, quantity_available, supplier_id) VALUES
    ('Product 1', 'Apple', 'Description for Product 1', 50.00, 100, 1),
    ('Product 2', 'Brand B', 'Description for Product 2', 75.00, 150, 2),
    ('Product 3', 'Samsung', 'Description for Product 3', 30.00, 80, 3),
    ('Product 4', 'Samsung', 'Description for Product 4', 100.00, 200, 4),
    ('Product 5', 'Apple', 'Description for Product 5', 45.00, 120, 5)
;
SELECT * FROM product; -- GET

INSERT INTO `order` (quantity, payment_method, total_amount, status, product_id, customer_id, supplier_id) VALUES
    (2, 'Credit Card', 100.00, 'Pending', 1, 1, 1),
    (1, 'PayPal', 75.00, 'Shipped', 2, 2, 2),
    (3, 'Cash on Delivery', 90.00, 'Delivered', 3, 3, 3),
    (4, 'Bank Transfer', 400.00, 'Pending', 4, 4, 4),
    (2, 'Credit Card', 120.00, 'Pending', 5, 5, 5)
;
SELECT * FROM `order`; -- GET

INSERT INTO review (rating, review_text, customer_id, product_id) VALUES
    (4, 'Good product, satisfied with the quality.', 1, 1),
    (5, 'Excellent service and fast delivery!', 2, 2),
    (3, 'Product was okay, expected better quality.', 3, 3),
    (5, 'Very happy with my purchase, highly recommended.', 4, 4),
    (4, 'Good value for money, would buy again.', 5, 5)
;
SELECT * FROM review; -- GET


-- READ/GET data --
SELECT * FROM product where brand = 'Brand A';

-- DELETE --
DELETE FROM customer;

-- CASCADE --
DELETE FROM customer WHERE customer_id=5;
SELECT * FROM customer;
SELECT * FROM profile;

DROP DATABASE e_commerce_db;