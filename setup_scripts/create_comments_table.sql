-- Downtown Donuts Comments Table Setup
-- Run this file with: mysql -u root -p < setup_scripts/create_comments_table.sql

CREATE DATABASE IF NOT EXISTS cs208demo; --Creates Database
USE cs208demo;

--Creates Table to Store User Comments
CREATE TABLE IF NOT EXISTS comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
--Inserts Comments into Table 
INSERT INTO comments (name, message) VALUES 
('Bryce Miller', 'Best donuts in town! The glazed are absolutely perfect every time.'),
('Quentin Lien', 'Been coming here since I was a kid. Still the same great quality after all these years!'),
('Myah Francis', 'Love the maple bacon bar! Great coffee too. This place never disappoints.');

-- Debugging text
SELECT 'Comments table created successfully!' AS Status;
SELECT COUNT(*) AS 'Total Comments' FROM comments;