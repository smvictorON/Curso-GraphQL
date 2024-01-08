create table if not exists empresas (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  cnpj int unsigned,
  PRIMARY KEY (id),
  unique key (cnpj)
)