create table if not exists cidades (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  estado_id int unsigned not null,
  area DECIMAL(10,2),
  PRIMARY KEY (id),
  FOREIGN KEY (estado_id) references estados (id)
)