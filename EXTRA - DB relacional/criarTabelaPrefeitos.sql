create table if not exists prefeitos (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  cidade_id int unsigned,
  PRIMARY KEY (id),
  unique key (cidade_id),
  FOREIGN KEY (cidade_id) references cidades (id)
)