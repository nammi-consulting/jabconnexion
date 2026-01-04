-- Schema MySQL pour JAB CONNEXION
-- A importer dans la base de données Railway

-- Table des utilisateurs (admin)
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des cours
CREATE TABLE IF NOT EXISTS classes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  day_of_week INT NOT NULL,
  start_time VARCHAR(10) NOT NULL,
  end_time VARCHAR(10) NOT NULL,
  capacity INT DEFAULT 20,
  instructor VARCHAR(255),
  category VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des messages de contact
CREATE TABLE IF NOT EXISTS contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insérer un utilisateur admin par défaut
-- Mot de passe : admin123 (CHANGEZ-LE APRÈS LE PREMIER LOGIN !)
INSERT INTO users (username, password) VALUES
('admin', '$2a$10$bZm6WkjmqKiI7t9QdUoQQO6659tbMC7yyLKTYKHU.ueKABzG9eU7S')
ON DUPLICATE KEY UPDATE username = username;
