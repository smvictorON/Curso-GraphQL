create table if not exists empresas_unidades (
  cidade_id int unsigned NOT NULL,
  empresa_id int unsigned not null,
  sede tinyint(1) not null,
  PRIMARY KEY (empresa_id, cidade_id)
)
