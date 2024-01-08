select c.nome, e.regiao from estados e, cidades c
where e.id = c.estado_id

select c.nome, e.sigla from estados e
inner join cidades c on e.id = c.estado_id
